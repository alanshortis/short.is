/* eslint-disable */

require('dotenv').config();
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const Figma = require('figma-js');
const parser = require('./figma-parser');

const figmaToken = process.env.FIGMA_TOKEN;
const figmaFile = process.env.FIGMA_FILE;
const themeDir = path.resolve('./src/theme/');
const themeFile = path.join(themeDir, 'theme.json');
const logPrepend = chalk.blue('[Figma]');

const log = (...args) => {
  console.log(logPrepend, chalk.white(...args));
};

log.error = (...args) => {
  console.log(logPrepend, chalk.red(...args));
};

log.success = (...args) => {
  console.log(logPrepend, chalk.green(...args));
};

if (!figmaToken || !figmaFile) {
  log.error('Please add an access token and file ID to .env');
  process.exit(9);
}

const figma = Figma.Client({
  personalAccessToken: figmaToken,
});

log('Fetching data...');

figma
  .file(figmaFile)
  .then(res => {
    log('Creating theme...');

    if (!fs.existsSync(themeDir)) {
      fs.mkdirSync(themeDir);
    }

    fs.writeFile(themeFile, parser(res.data), err => {
      if (err) {
        log.error(err);
        process.exit(1);
      }
      log.success('Theme file created 🎉');
    });
  })
  .catch(({ response }) => {
    if (response.status === 404) {
      log.error('File not found - please check FIGMA_FILE in .env is valid');
      process.exit(9);
    }
    if (response.status === 403) {
      log.error('Not authorised - please check FIGMA_TOKEN in .env is valid');
      process.exit(9);
    }
    log.error(response.status, response.statusText);
    process.exit(1);
  });
