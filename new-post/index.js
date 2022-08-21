/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs/promises');
const path = require('path');
const prompts = require('prompts');
const template = require('./templates');

const PATH = path.join(__dirname, '../', 'src/posts');
const today = new Date().toISOString().slice(0, 10);
const postYear = today.slice(0, 4);
const postMonth = today.slice(5, 7);

const createDaily = async () => {
  const filePath = path.join(PATH, 'daily', postYear, postMonth);

  await fs.mkdir(filePath, { recursive: true });
  await fs.writeFile(`${filePath}/${today}.mdx`, template.daily(today));
};

const createWriting = async title => {
  const filePath = path.join(PATH, 'writing');
  const slug = encodeURIComponent(title.split(' ').join('-').toLowerCase());

  await fs.writeFile(`${filePath}/${slug}.mdx`, template.writing(title, today));
};

const create = async () => {
  const what = await prompts([
    {
      type: 'select',
      name: 'postType',
      message: 'What type of post is this?',
      choices: [
        { title: 'Daily', value: 'daily' },
        { title: 'Writing', value: 'writing' },
      ],
    },
    {
      type: postType => (postType === 'writing' ? 'text' : null),
      name: 'postTitle',
      message: "What's the title of this post?",
    },
  ]);

  if (what.postType === 'daily') {
    createDaily();
  } else {
    createWriting(what.postTitle);
  }
};

create();
