/* eslint-disable @typescript-eslint/no-var-requires */
const { exec } = require('child_process');

const branchClean = () => {
  exec('git checkout master && git pull', async () => {
    exec('git branch -D @{-1}');
  });
};

branchClean();
