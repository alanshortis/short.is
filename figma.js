/* eslint-disable */

require('dotenv').config();
require('colors');
const path = require('path');
const Figma = require('figma-js');

const options = {
  token: process.env.FIGMA_TOKEN,
  figmaFile: process.env.FIGMA_FILE,
  outputDir: path.resolve('./src/theme/'),
  outputFileName: 'figma-styles.json',
};

const log = (message, type) => {
  const prepend = `${'[Figma]'.blue}`;
  let color = 'white';

  if (type === 'error') color = 'red';
  if (type === 'success') color = 'green';

  return console.log(`${prepend} ${message[color]}`);
};

if (!options.token || !options.figmaFile) {
  log('Please add an access token and file ID to .env', 'error');
  process.exit(9);
}

const figma = Figma.Client({
  personalAccessToken: options.token,
});

log('Fetching data...');

figma
  .file(options.figmaFile)
  .then(res => {
    console.log(res.status);
  })
  .catch(({ response }) => {
    console.log(response.status);
    if (response.status === 404) {
      log('File not found - please check FIGMA_FILE in .env is valid', 'error');
      process.exit(9);
    }
    if (response.status === 403) {
      log('Not authorised - please check FIGMA_TOKEN in .env is valid', 'error');
      process.exit(9);
    }
    log(`${response.status} ${response.statusText}`);
    process.exit(1);
  });

// log('Parsing data...');

// log(`Done!`, 'success');

// ---------------------------------

// const fs = require('fs');
// // const parse = require('./figma-parser');

// figma
//   .file(options.figmaFile)
//   .then(res => {
//     console.log(res);
//     if (res.status === 404) {
//       log.error('🚫   File not found. Please check FIGMA_FILE in .env.');
//       process.exit(9);
//       return;
//     }

//     if (res.status !== 200) {
//       log.error('🚫   ', res.status, res.statusText);
//       process.exit(1);
//       return;
//     }

//   log('🏭   Parsing data...');

//   const theme = JSON.stringify(res.data, null, 2);

//   if (!fs.existsSync(outputDir)) {
//     fs.mkdirSync(outputDir);
//   }

//   fs.writeFile(outFile, theme, err => {
//     if (err) {
//       log.error(err);
//       process.exit(1);
//     }
//     log(`🎉   ${chalk.green('File saved to:')}`, outFile);
//   });
// })
// .catch(err => {
//   const { response } = err;
//   log(`${response.status} ${response.statusText}`);
//   process.exit(1);
// });
