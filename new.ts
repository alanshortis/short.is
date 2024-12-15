import fsPromises from 'fs/promises';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import prompts, { type PromptObject } from 'prompts';
import chalk from 'chalk';

const postTemplate = (title: string, date: string) => `---
title: '${title}'
date: '${date}'
---
`;

const questions: PromptObject[] = [
  {
    type: 'text',
    name: 'title',
    message: '🤔 What are we calling this opus?',
  },
  {
    type: 'text',
    name: 'date',
    message: '📅 Post date?',
    initial: new Date().toISOString().slice(0, 10),
  },
];

const newThing = async () => {
  const response = await prompts(questions);

  const slug = response.title.toLowerCase().replace(/\s/g, '-');
  const fullPath = `${path.join(__dirname, 'src/posts')}/${slug}.md`;

  if (fs.existsSync(fullPath)) {
    console.error(chalk.red.bold('\n  🚨 Did you already write this one?\n'));
    process.exit();
  }

  await fsPromises.writeFile(fullPath, postTemplate(response.title, response.date));
  exec(`code ${fullPath}`);
};

newThing();
