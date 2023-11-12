import 'dotenv/config';
import fs from 'fs';
import { PutObjectCommand, S3Client, CreateMultipartUploadCommand } from '@aws-sdk/client-s3';

const { AWS_KEY, AWS_SECRET, AWS_BUCKET } = process.env;

const client = new S3Client({
  credentials: {
    accessKeyId: AWS_KEY || '',
    secretAccessKey: AWS_SECRET || '',
  },
  region: 'eu-west-2',
});

const fileName = 'test1.png';
const fileContent = fs.readFileSync(`./photos/${fileName}`);

export const upload = async () => {
  const command = new PutObjectCommand({
    Bucket: AWS_BUCKET,
    // Bucket: 'fsdgsdgd',
    Key: fileName,
    Body: fileContent,
  });

  console.log(`🖼️ ${fileName} uploading...`);

  try {
    await client.send(command);
    console.log(`✅ ${fileName} done`);
  } catch (err) {
    console.error(`😧 Error: ${err}`);
  }
};

upload();
