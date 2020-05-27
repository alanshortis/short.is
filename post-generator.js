const fs = require('fs');
const prompts = require('prompts');
const chalk = require('chalk');
const simpleGit = require('simple-git/promise');

const POST_ROOT = 'src/posts';
const FIRST_DAILY_POST = new Date('2020-03-15');
const BASE_BRANCH = 'feature/v3';

const templates = {
  daily: (date, title) => `---
title: '#${title}'
date: '${date}'
mobile: false
featured: false
slug: '/daily/${title}'
---`,

  writing: (date, title, slug) => `---
title: '${title}'
date: '${date}'
category: 'development'
slug: '/writing/${slug}'
intro: ""
---`,
};

const postType = async () => {
  const response = await prompts({
    type: 'select',
    name: 'type',
    message: 'What type of post should be created?',
    choices: [
      { title: 'Daily', value: 'daily' },
      { title: 'Writing', value: 'writing' },
    ],
  });

  return response.type;
};

const postTitle = async () => {
  const response = await prompts({
    type: 'text',
    name: 'title',
    message: "What's the title of the new post?",
  });

  return response.title;
};

const createFolder = async folder => {
  const fullPath = `${POST_ROOT}/daily/${folder}`;
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(chalk.green(`✔ ${fullPath} folder created.`));
  }
};

const createFile = async (fileName, content, path = `${POST_ROOT}/writing`) => {
  fs.writeFile(`${path}/${fileName}`, content, err => {
    if (err) throw err;
    console.log(chalk.green(`✔ ${path}/${fileName} created.`));
  });
};

const postGenerator = async () => {
  const today = new Date();
  const date = String(today.getDate()).padStart(2, 0);
  const month = String(today.getMonth() + 1).padStart(2, 0);
  const year = today.getFullYear();
  const formattedDate = `${year}-${month}-${date}`;

  const type = await postType();

  if (type === 'writing') {
    const title = await postTitle();
    const slug = encodeURI(
      title
        .split(' ')
        .join('-')
        .toLowerCase()
    );

    await simpleGit().checkoutBranch(`writing/${slug}`, BASE_BRANCH);

    createFile(`${formattedDate}-${slug}.mdx`, templates.writing(formattedDate, title, slug));
  }

  if (type === 'daily') {
    const daysSince = (today - FIRST_DAILY_POST) / (1000 * 3600 * 24);
    const dailyPostCount = Math.round(daysSince - 1);
    const yearMonthFolder = `${year}/${month}`;
    const fullPath = `${POST_ROOT}/daily/${yearMonthFolder}`;

    await simpleGit().checkoutBranch(`daily/${formattedDate}`, BASE_BRANCH);

    await createFolder(yearMonthFolder);
    await createFile(
      `${formattedDate}.mdx`,
      templates.daily(formattedDate, dailyPostCount),
      fullPath
    );
  }
};

postGenerator();
