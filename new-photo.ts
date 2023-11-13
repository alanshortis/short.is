import 'dotenv/config';
import fs from 'fs';
import chalk from 'chalk';
import { HeadObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const PHOTO_DIR = './photos';
const { AWS_KEY, AWS_SECRET, AWS_BUCKET } = process.env;
const fileNames = fs.readdirSync(PHOTO_DIR);

const client = new S3Client({
  credentials: {
    accessKeyId: AWS_KEY || '',
    secretAccessKey: AWS_SECRET || '',
  },
  region: 'eu-west-2',
});

export const put = async (fileName: string) => {
  const fileContent = fs.readFileSync(`./photos/${fileName}`);

  const bucketParams = {
    Bucket: AWS_BUCKET,
    Key: fileName,
  };

  try {
    const headCommand = new HeadObjectCommand(bucketParams);
    const { $metadata } = await client.send(headCommand);
    if ($metadata.httpStatusCode === 200) {
      console.log(`🫨  ${chalk.yellow(`${fileName} already uploaded`)}`);
      return;
    }
  } catch (err) {}

  console.log(`🔄 Uploading ${chalk.blue(fileName)}`);

  const putCommand = new PutObjectCommand({
    ...bucketParams,
    Body: fileContent,
  });

  try {
    await client.send(putCommand);
    console.log(`✅ ${chalk.bold(`${chalk.green(fileName)} uploaded`)}\n`);
  } catch (err) {
    console.error(`💔 ${chalk.red(chalk.bold('Error:'))} ${err}\n`);
  }
};

(async () => {
  for (const fileName of fileNames) {
    await put(fileName);
  }
})();
