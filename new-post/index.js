/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs/promises');
const path = require('path');
const prompts = require('prompts');
const template = require('./templates');

const PATH = path.join(__dirname, '../', 'src/posts');
const streak = Math.ceil((new Date().getTime() - new Date('2022-08-17').getTime()) / (1000 * 3600 * 24));
const today = new Date().toISOString().slice(0, 10);

const createPost = async (type, title) => {
  const filePath = path.join(PATH, type);
  const fileName = type === 'daily' ? today : encodeURIComponent(title.split(' ').join('-').toLowerCase());

  await fs.writeFile(`${filePath}/${fileName}.mdx`, template[type](title, today));
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

  const postTitle = what.postType === 'daily' ? streak : what.postTitle;

  createPost(what.postType, postTitle);
};

create();
