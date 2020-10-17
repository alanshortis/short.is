const fs = require('fs');
const prompts = require('prompts');
const simpleGit = require('simple-git/promise');
const { exec } = require('child_process');

const BASE_BRANCH = 'v3';
const FILE_EXT = 'md';

const template = {
  writing: (date, title, slug) => `---
title: '${title}'
date: '${date}'
permalink: '/writing/${slug}/'
tags: writing
intro: ""
layout: 'writing'
---`,
};

const postTitle = async () => {
  const response = await prompts({
    type: 'text',
    name: 'title',
    message: "What's the title of the new post?",
  });

  return response.title;
};

const createFile = async (fileName, content, path = 'src/writing') => {
  fs.writeFile(`${path}/${fileName}`, content, err => {
    if (err) throw err;
    console.log('\x1b[32m', `✔ ${path}/${fileName} created.`);
  });

  exec(`code ${path}/${fileName}`);
};

const postGenerator = async () => {
  const today = new Date();
  const date = String(today.getDate()).padStart(2, 0);
  const month = String(today.getMonth() + 1).padStart(2, 0);
  const year = today.getFullYear();
  const formattedDate = `${year}-${month}-${date}`;

  const title = await postTitle();
  const slug = encodeURI(title.split(' ').join('-').toLowerCase());

  await simpleGit().checkoutBranch(`writing/${slug}`, BASE_BRANCH);
  console.log('\x1b[32m', `✔ branch 'writing/${slug}' created and checked out.`);

  createFile(
    `${formattedDate}-${slug}.${FILE_EXT}`,
    template.writing(formattedDate, title, slug)
  );
};

postGenerator();
