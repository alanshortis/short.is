const prompts = require('prompts');

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

const postGenerator = async () => {
  const type = await postType();

  console.log(type);

  if (type === 'writing') {
    const title = await postTitle();
    console.log(title);
  }
};

postGenerator();
