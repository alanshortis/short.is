/* eslint-disable */

require('dotenv').config();
require('colors');
const path = require('path');
const Figma = require('figma-js');

const options = {
  token: process.env.FIGMA_TOKEN,
  themeFile: process.env.FIGMA_FILE,
  outputDir: path.resolve('./src/theme/'),
  outputFile: path.join(path.resolve('./src/theme/'), 'color.json'),
};

if (!options.token || !options.themeFile) {
  console.error('⚠️  Please add a Figma access token and file ID to .env.'.red);
}

const figma = Figma.Client({
  personalAccessToken: options.token,
});

// ---------------------------------

// const fs = require('fs');
// // const parse = require('./figma-parser');

// log('🚚   Fetching data...');

// figma
//   .file(figmaFile)
//   .then(res => {
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

//     log('🏭   Parsing data...');

//     const theme = JSON.stringify(res.data, null, 2);

//     if (!fs.existsSync(outputDir)) {
//       fs.mkdirSync(outputDir);
//     }

//     fs.writeFile(outFile, theme, err => {
//       if (err) {
//         log.error(err);
//         process.exit(1);
//       }
//       log(`🎉   ${chalk.green('File saved to:')}`, outFile);
//     });
//   })
//   .catch(err => {
//     const { response } = err;
//     log.error(response.status, response.statusText);
//     process.exit(1);
//   });
