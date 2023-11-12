import fsPromises from 'fs/promises';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import chalk from 'chalk';

const template = (day: number, date: string) => `---
day: '${day}'
date: '${date}'
title: 'On '
---
`;

const today = new Date().toISOString().slice(0, 10);
const day = Math.ceil((new Date().getTime() - new Date('2022-08-17').getTime()) / (1000 * 3600 * 24));
const fullPath = `${path.join(__dirname, 'src/data/posts')}/${day}.md`;

const createPost = async (): Promise<void> => {
  if (fs.existsSync(fullPath)) {
    console.error(chalk.bold('⛔️ Did you already write this one?'));
    process.exit();
  }

  exec(`git checkout -b daily/${day}`, async (): Promise<void> => {
    await fsPromises.writeFile(fullPath, template(day, today));
    exec(`code ${fullPath}`);
  });
};

createPost();
