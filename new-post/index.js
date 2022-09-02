/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const fsPromises = require('fs/promises');
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');
const prompts = require('prompts');
const template = require('./templates');

const PATH = path.join(__dirname, '../', 'src/posts');
const streak = Math.ceil((new Date().getTime() - new Date('2022-08-17').getTime()) / (1000 * 3600 * 24));
const today = new Date().toISOString().slice(0, 10);

const createPost = async (type, title) => {
  const filePath = path.join(PATH, type);
  const fileName = type === 'daily' ? today : encodeURIComponent(title.split(' ').join('-').toLowerCase());
  const fullPath = `${filePath}/${fileName}.mdx`;

  if (fs.existsSync(fullPath)) {
    console.error('\x1b[31m%s\x1b[0m', '⛔️ Did you already write this one?');
    process.exit();
  }

  exec(`git checkout -b ${type}/${type === 'daily' ? title : fileName}`, async () => {
    await fsPromises.writeFile(fullPath, template[type](title, today));
    exec(`code ${fullPath}`);
  });
};

const huh = async () => {
  const what = await prompts([
    {
      type: 'select',
      name: 'postType',
      message: '🤔 What type of post is this?',
      choices: [
        { title: 'Daily', value: 'daily' },
        { title: 'Writing', value: 'writing' },
      ],
    },
    {
      type: postType => (postType === 'writing' ? 'text' : null),
      name: 'postTitle',
      message: "🤔 What's the title of this post?",
    },
  ]);

  const postTitle = what.postType === 'daily' ? streak : what.postTitle;

  createPost(what.postType, postTitle);
};

huh();
