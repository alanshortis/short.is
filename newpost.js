const fs = require('fs');
const readline = require('readline');

const PATH = 'src/posts';

const template = (title, date) => `---
title: '${title}'
date: '${date}'
intro: ""
---
`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("🤔   \x1B[34mWhat's the title of the post? \033[37m", title => {
  const slug = encodeURIComponent(title.split(' ').join('-').toLowerCase());
  const date = new Date().toISOString().slice(0, 10);

  fs.writeFileSync(`${PATH}/${slug}.mdx`, template(title, date));
  rl.close();
});

rl.on('close', () => {
  console.log('🎉   \x1b[32mNew file created!');
  process.exit(0);
});
