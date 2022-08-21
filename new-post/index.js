/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const prompts = require('prompts');
const template = require('./templates');

const PATH = path.join(__dirname, '../', 'src/posts');
const today = new Date().toISOString().slice(0, 10);
const postYear = today.slice(0, 4);
const postMonth = today.slice(5, 7);

const questions = [
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
];

const createDaily = () => {
  const filePath = path.join(PATH, 'daily', postYear, postMonth);

  fs.mkdir(filePath, { recursive: true }, () => {
    fs.writeFile(`${filePath}/${today}.mdx`, template.daily(today), err => {
      if (err) console.error(err);
    });
  });
};

const createWriting = title => {
  const filePath = path.join(PATH, 'writing');
  const slug = encodeURIComponent(title.split(' ').join('-').toLowerCase());

  fs.writeFile(`${filePath}/${slug}.mdx`, template.writing(title, today), err => {
    if (err) console.error(err);
  });
};

const create = async () => {
  const answers = await prompts(questions);

  if (answers.postType === 'daily') {
    createDaily();
  } else {
    createWriting(answers.postTitle);
  }
};

create();
