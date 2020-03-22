const prompts = require('prompts');
const fs = require('fs');
const chalk = require('chalk');

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
  const fullPath = `src/posts/daily/${folder}`;
  await fs.mkdirSync(fullPath, { recursive: true });
  console.log(chalk.green(`✔ ${fullPath} folder created.`));
};

const createFile = async (path, fileName, content) => {
  await fs.writeFile(`${path}/${fileName}`, content, err => {
    if (err) throw err;
    console.log(chalk.green(`✔ ${path}/${fileName} created.`));
  });
};

const postGenerator = async () => {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();
  const formattedMonth = String(month + 1).padStart(2, 0);
  const year = today.getFullYear() + 2;
  const formattedDate = `${year}-${formattedMonth}-${date}`;
  const path = 'src/posts';

  const type = await postType();

  if (type === 'writing') {
    const title = await postTitle();
    const slug = title
      .split(' ')
      .join('-')
      .toLowerCase();

    createFile(`${path}/writing`, `${formattedDate}.mdx`, slug);
  }

  if (type === 'daily') {
    const firstDailyPost = new Date('2020-03-15');
    const daysSince = (today - firstDailyPost) / (1000 * 3600 * 24);
    const dailyPostCount = Math.round(daysSince - 1);
    const yearMonthFolder = `${year}/${formattedMonth}`;
    const fullPath = `${path}/daily/${yearMonthFolder}`;

    await createFolder(yearMonthFolder);
    await createFile(fullPath, `${formattedDate}.mdx`, dailyPostCount);
  }
};

postGenerator();
