---
title: 'Automating file creation'
layout: 'writing'
date: '2020-03-24'
updated: '2020-03-29'
tags: writing
permalink: '/writing/automating-file-creation/'
intro: 'If you frequently write posts in markdown that need specific file names and front matter, you could save yourself literally seconds by automating file creation and content.'
---

As well as these occasional technical posts, I have recently started to write a daily blog. This isn't yet published anywhere but will be when v3 of this site is ready to go.

For posts like the one you're reading now it's not a huge problem to just manually create a file, cut and paste the [front matter](https://www.gatsbyjs.org/docs/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files) from an older post, update what needs to change before writing the post and publishing. For the daily it's not more difficult as such, but it's still a manual process which adds friction and if I'm going to keep the streak I'll need it to be effortless.

<a class="anchor" id="snippets" />

## VS Code Snippets

A great feature of VS Code is the ability to define your own snippets to quickly scaffold file contents, and this is what I have been doing so far.

To add custom snippets, create a new file in the `.vscode` folder at the root of your project named `posts.code-snippets`. My snippets for 'writing' and 'daily' posts look like this:

```js
{
  "Post Front matter": {
    "prefix": "pfm",
    "description": "Front matter for posts",
    "body": [
      "---",
      "title: '$1'",
      "date: '$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE'",
      "category: '${3:development}'",
      "slug: '/writing/$1'",
      "intro: '$2'",
      "---"
    ]
  },
  "Daily Front matter": {
    "prefix": "dfm",
    "description": "Front matter for daily",
    "body": [
      "---",
      "title: '#$1'",
      "date: '$CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE'",
      "mobile: ${3:false}",
      "featured: ${4:false}",
      "slug: '/daily/$1'",
      "---"
    ]
  }
}
```

Each entry in the object is a new snippet whose properties are:

- `prefix` is what you type in VS Code to use the snippet. You can either type this directly into the file and hit tab, or hit <kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>p</kbd> to open the command palette and type 'insert snippet' to see a list.
- `body` is what will be printed into the file when using a snippet.
- `description` is a brief description of what the snippet does. This is shown in the command palette when snippets are listed, and when using the prefix directly.

The `body` property has a fair amount going on:

- It is an array with each entry being a new line.
- You can pre-fill from a few variables provided by VS Code - in this case I build the date from the current year, month and date. There are [many variables to choose from](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables).
- Placeholders help to add content that may change between uses. Using `$1` will place the cursor at that point once the snippet has been printed. Using the same number multiple times will add multiple cursors. It's also possible to add a default value - `${2:true}`.

For my use case, this isn't _bad_. It removes the need to remember the front matter and it's pretty easy to update, but:

- I still need to create the file first, and as this is the current date I need to double check what that is.
- I still need to update the front matter, some of which is either repeated or could be generated.
- For 'daily' posts, I'll need to create new folders each month/year.

<a class="anchor" id="cli" />

## Create a CLI

To remove these boundaries and as an excuse to write something in node, I'm going to write a CLI.

Like most front end developers my exposure to Node.js is limited. I have configured tools that are built on Node like Gulp and Webpack, and I have used NPM to install thousands of dependencies, but I haven't really written a utility from scratch.

It's very likely my solution is not going to be the most elegant, and there will certainly be better approaches and best practices. I really don't think this matters; the tool I am writing is for my own personal use, it will never go in front of a team, it will never be used in a production environment and possible edge cases are tiny. Let's not let perfect get in the way of good enough.

Ordinarily I would write a step-by-step guide to building this but with my limited knowledge and the hack-like nature of the idea, I'm just going to try and explain each part.

### Requirements

Even for a quick and dirty project like this I like to write some requirements down to get me started, as well as any other considerations that might help:

- Prompt for the type of post being created - either 'daily' or 'writing'.
  - If this is a 'writing' post, also prompt for the title.
  - If this is a daily post, the title will be the post count. A daily post may also need new folders.
- Create the file with the correct file name - the date of creation. Days and months need a leading zero if they're less than 10.
- Add the front matter to file with all the correct data.
- Show a message in the console to indicate what was created and where.

My folder structure looks like this:

```
src
└── posts
    ├── daily
    │   └── [YYYY]
    │       └── [MM]
    │           └── YYYY-MM-DD.mdx
    └── writing
        └── YYYY-MM-DD.mdx
```

All of the code below can go into a single file at the root of your project named `post-generator.js` and can be executed from the terminal using `node post-generator.js`.

### 1. Dependencies and Constants

```js
const fs = require('fs');
const prompts = require('prompts');
const chalk = require('chalk');
```

The `fs` package is needed to work with the file system - creating folders and files - and is bundled with Node. There is no need to install it.

`chalk` lets us make console logs look a little prettier in the console, and `prompts` makes it really easy to make prompts and record the response.

`npm i --save chalk prompts`.

This solution is going to be pretty variable heavy but most of them will be dynamic and change with every use. There are two key pieces of information that should remain constant: the date of the first 'daily' post and the root for all post types.

```js
const POST_ROOT = 'src/posts';
const FIRST_DAILY_POST = new Date('2020-03-15');
```

### 2. Templates

To add content to the files we create, template literals can be used in a function to add given text to what is returned. Each template returns front matter which is used to store metadata about the specific post that can be used later:

```js
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
```

The questionable indentation is deliberate - any indentation would also appear in the file which we don't want.

### 3. Prompts

Making use of the `prompts` package installed earlier we can make both prompts needed really quickly:

```js
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
```

The `postType` function provides a selection prompt, where we can choose if we're creating a 'Daily' or 'Writing' post type, and the choice is returned.

The `postTitle` is much more lightweight as it only prompts for a string. It's possible to add some [validation](https://www.npmjs.com/package/prompts#%E2%9D%AF-usage) to the entry if that's helpful.

### 4. Creating folders

The 'daily' post type is organised into folders, by year and month. On the first of the month new folders will be automatically created:

```js
const createFolder = async folder => {
  const fullPath = `${POST_ROOT}/daily/${folder}`;
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(chalk.green(`✔ ${fullPath} folder created.`));
  }
};
```

This takes an argument of 'folder', which in this case will be the current year and month. If the passed folder doesn't already exist it'll create all the folders in the tree. When neither the year or month folder exists both will be created. This works because of the addition of the `recursive` option.

Once created, the path to the folder(s) is logged to the console using the `chalk` package we installed to make the text green.

### 5. Creating files

```js
const createFile = async (fileName, content, path = `${POST_ROOT}/writing`) => {
  fs.writeFile(`${path}/${fileName}`, content, err => {
    if (err) throw err;
    console.log(chalk.green(`✔ ${path}/${fileName} created.`));
  });
};
```

The function takes arguments of 'fileName' (what the file should be called including the extension), 'content' (what goes in the file), and optionally, 'path'. Because 'writing' posts will always be in the same folder, we set a default value for 'path' as the 'writing' folder.

This also has a callback function which will throw an error if there is one, or log the name of the file created to the console if successful.

### 6. Making it all work

This is a large function, so I'll do my best to explain. This is where most of the messy, quick decisions have been made so forgive anything repetitive or inelegant:

```js
const postGenerator = async () => {
  const today = new Date();
  const date = String(today.getDate()).padStart(2, 0);
  const month = String(today.getMonth() + 1).padStart(2, 0);
  const year = today.getFullYear();
  const formattedDate = `${year}-${month}-${date}`;

  const type = await postType();

  if (type === 'writing') {
    const title = await postTitle();
    const slug = encodeURI(title.split(' ').join('-').toLowerCase());

    createFile(`${formattedDate}.mdx`, templates.writing(formattedDate, title, slug));
  }

  if (type === 'daily') {
    const daysSince = (today - FIRST_DAILY_POST) / (1000 * 3600 * 24);
    const dailyPostCount = Math.round(daysSince - 1);
    const yearMonthFolder = `${year}/${month}`;
    const fullPath = `${POST_ROOT}/daily/${yearMonthFolder}`;

    await createFolder(yearMonthFolder);
    await createFile(
      `${formattedDate}.mdx`,
      templates.daily(formattedDate, dailyPostCount),
      fullPath
    );
  }
};

postGenerator();
```

First, we need set some variables for dates, and parts of dates. Each post's file name is the date it was created and the date is required in the front matter. Using the `Date` constructor we can get today's date, then:

- Use the `getDate` method for the day of the month. Stylistically, if the day is less than 10, I want a leading zero. This is pretty easy using a newer method in JS, `padStart`.
- The `getMonth` method gives us the current month, BUT, in JavaScript this is zero indexed so we need to add one to ensure we're not a month behind. Again, we pad the number.
- For the year, it's `getFullYear`.
- Finally, we put these all together to make the formatted date, YYYY-MM-DD.

To tigger the prompt for the post type we call the `postType` function, which returns either 'writing' or 'daily'. We can then move into a couple of `if` statements.

#### 'writing' post type

If this is a 'writing' post we need a title, so we immediately call the `postTitle` function to trigger the second prompt. The title is also used in the post slug, so we declare a new `slug` variable which is the title set to lowercase, replaces spaces with dashes, and URL encode to help ensure out slug is valid.

Because 'writing' posts all live in a single folder that we know exists, we can just jump straight to the `createFile` function, called with two arguments:

- The file name, which is the formatted date we made earlier plus the 'mdx' file extension.
- The contents, which we get from the `templates.writing` function with three arguments of the title, formatted date and the slug.

#### 'daily' post type

If this is a 'daily' post type we have a few more hoops to jump through, but the hard parts are already covered with the functions above. We just need to make some variables.

The post title for a daily post is the post count, so we start by looking at how many days it was since the first post, which we keep in a constant already defined. I started at zero for the post count, so we need to take 1 away.

Next, put the current year and month together to make the folder in which this post should live, then add that to the root folder for posts and the 'daily' sub folder to get the full path.

That's all we need, and we can call the `createFolder` function .

I think this is a place where the app could be more efficient. Creating the variables needed for and then calling a function to create a folder which will only actually make anything ~3% of the time isn't ideal. But once again, this is not production code and we can live with this.

Once the folder is created and its name logged to the console, the final step is to call the `createFile` function in almost the same way as we did for the 'writing' post. The only difference is that an argument for 'path' needs to be provided.

### Done

At this point, many words further down the page, we could argue that this is a lot of trouble to go to in order to partially automate the creation of new files for posts. I may not disagree, but it's not all about a time saving:

- Shifting this to code means I no longer have to think about file names and front matter.
- Errors will be near-eliminated, so in many cases I'll be happy to merge in a new post without firing up the app to check it's working.
- Making post creation this quick removes another boundary between me and writing a new post, and this is key when I intend to write every day.
- It's an excuse to mess with some code, in an area I wouldn't have otherwise looked into. I already have an idea for another CLI.

For further refinement when working with branches, see [Part 2](/writing/automating-file-creation-part-2).