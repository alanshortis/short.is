---
title: 'Automating file creation, Part 2'
layout: 'writing'
date: '2020-05-27'
updated: '2020-03-29'
tags: writing
permalink: '/writing/automating-file-creation-part-2/'
intro: 'When automating file creation for a blog or website, you may need to create new content in a feature branch. Fortunately, that can be automated too.'
---

This is a continuation of [Part 1](/writing/automating-file-creation), where we automated the creation of new files when adding posts to websites.

## Branching

After using the post generator for a couple of months it's definitely saved a lot of time and error. The only remaining manual step is to create new branches for each new post.

Updating the generator to create a new feature branch before the files and folders for a new post is simple enough. The examples below will add to the generator built in [Part 1](/writing/automating-file-creation).

## Updating the script

We'll use a small package from NPM to handle git branching: `npm i --save simple-git`.

```js
const fs = require('fs');
const prompts = require('prompts');
const chalk = require('chalk');
const simpleGit = require('simple-git/promise');

const POST_ROOT = 'src/posts';
const FIRST_DAILY_POST = new Date('2020-03-15');
const BASE_BRANCH = 'feature/v3';
```

Here we are:

- Requiring `simple-git`, which can use either callbacks or promises. In this case we'll use promises as the work we've already done is pretty heavy on async code.
- Adding a constant for the base branch; the branch the automatically created branch will be based on.

To create a branch before we create folders and files, we use the `checkoutBranch` method which needs a name for the new branch, and the branch from which the new one is created. It also takes a callback, but we don't need that here.

When creating a 'daily' post we can use the `formattedDate` created earlier for the branch name:

```js
if (type === 'daily') {
  const daysSince = (today - FIRST_DAILY_POST) / (1000 * 3600 * 24);
  const dailyPostCount = Math.round(daysSince - 1);
  const yearMonthFolder = `${year}/${month}`;
  const fullPath = `${POST_ROOT}/daily/${yearMonthFolder}`;

  await simpleGit().checkoutBranch(`daily/${formattedDate}`, BASE_BRANCH);
  console.log(chalk.green(`✔ branch 'daily/${formattedDate}' created and checked out.`));

  await createFolder(yearMonthFolder);
  await createFile(
    `${formattedDate}.mdx`,
    templates.daily(formattedDate, dailyPostCount),
    fullPath
  );
}
```

When selecting 'daily' in the post generator, a new branch of `daily/2020-05-27` is created just before file creation.

For a 'writing' post, the slug of the new post works well for a branch name:

```js
if (type === 'writing') {
  const title = await postTitle();
  const slug = encodeURI(title.split(' ').join('-').toLowerCase());

  await simpleGit().checkoutBranch(`writing/${slug}`, BASE_BRANCH);
  console.log(chalk.green(`✔ branch 'writing/${slug}' created and checked out.`));

  createFile(`${formattedDate}-${slug}.mdx`, templates.writing(formattedDate, title, slug));
}
```

## Merging the new posts

Once the new post is written, pushing, raising a PR, merging, and deleting the feature branch remains manual. I'd like to look at how this could also be automated in the future but as for now I prefer this to be manual. Not all automation is an improvement; since I between versions of the website that hosts all my writing I am using mutiple branches depending on the post type so being able to make a decision as I create and merge PRs works better for me.

## Using an alias

To make this _even smoother_ we can add a bash alias to reduce the creation of a post down to a single command. Currently, it's neccssary to move to the folder that contains the generator (and website), then run the node script.

Let's start by adding the node script to `package.json` so the command is more succinct, but also so it's documented:

```json
"scripts": {
  "new-post": "node post-generator.js"
}
```

Then, a new bash alias will help us skip a couple of steps - change to the folder that contains the post generator and website, and run the script to start post generation:

```bash
alias newpost="cd ~/Sites/short.is && npm run new-post"
```

From any location on the command line, running `newpost` will get us to the right folder, create a new branch and write the required files in a single command.

## Wrapping up

As mentioned in Part 1, there are likely to be glaring issues and inefficiencies with this code. One issue I am aware of is that if a post title contains punctuation it'll end up in the slug. It's doesn't matter! I'm aware of it, and I can handle it myself if I need to. This is a luxury we don't often have.

If you're working with code that faces users and/or is maintained by a team you cannot let issues like this slide. You need to adhere to coding standards, proper error handling, and considering edge cases and user experience. When you're writing a utility for yourself you can afford to work faster and get to a working solution quikly.

There is no need for this to be perfect or even particularly robust. The aim here is to remove barriers to creating the work and content that _does_ matter to your audience.