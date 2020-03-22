const fs = require('fs');
const prompts = require('prompts');
const chalk = require('chalk');

const POST_ROOT = 'src/posts';
const FIRST_DAILY_POST = '2020-03-15';

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

const createFile = async (path, fileName, content) => {
  fs.writeFile(`${path}/${fileName}`, content, err => {
    if (err) throw err;
    console.log(chalk.green(`✔ ${path}/${fileName} created.`));
  });
};

const postGenerator = async () => {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();
  const formattedMonth = String(month + 1).padStart(2, 0);
  const year = today.getFullYear();
  const formattedDate = `${year}-${formattedMonth}-${date}`;

  const type = await postType();

  if (type === 'writing') {
    const title = await postTitle();
    const slug = title
      .split(' ')
      .join('-')
      .toLowerCase();

    createFile(
      `${POST_ROOT}/writing`,
      `${formattedDate}.mdx`,
      templates.writing(formattedDate, title, slug)
    );
  }

  if (type === 'daily') {
    const firstDailyPost = new Date(FIRST_DAILY_POST);
    const daysSince = (today - firstDailyPost) / (1000 * 3600 * 24);
    const dailyPostCount = Math.round(daysSince - 1);
    const yearMonthFolder = `${year}/${formattedMonth}`;
    const fullPath = `${POST_ROOT}/daily/${yearMonthFolder}`;

    await createFolder(yearMonthFolder);
    await createFile(
      fullPath,
      `${formattedDate}.mdx`,
      templates.daily(formattedDate, dailyPostCount)
    );
  }
};

postGenerator();
