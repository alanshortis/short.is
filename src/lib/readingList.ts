enum Type {
  ARTICLE = 'Article',
  VIDEO = 'Video',
  BLOG = 'Blog',
  BOOK = 'Book',
  PODCAST = 'Podcast',
}

type Reading = {
  url: `https://${string}`;
  title: string;
  author: string;
  type: Type;
};

export const readingList: Reading[] = [
  {
    url: 'https://99percentinvisible.org/episode/children-of-the-magenta-automation-paradox-pt-1/',
    title: 'Children of the Magenta: Automation Paradox, Pt. 1',
    author: '99% Invisible',
    type: Type.PODCAST,
  },
  {
    url: 'https://whitep4nth3r.com/blog/how-to-build-a-copy-code-snippet-button/',
    title: 'How to build a copy code snippet button and why it matters',
    author: 'Salma Alam-Naylor',
    type: Type.BLOG,
  },

  {
    url: 'https://99percentinvisible.org/episode/children-of-the-magenta-automation-paradox-pt-1/',
    title: 'Children of the Magenta: Automation Paradox, Pt. 1',
    author: '99% Invisible',
    type: Type.PODCAST,
  },
  {
    url: 'https://whitep4nth3r.com/blog/how-to-build-a-copy-code-snippet-button/',
    title: 'How to build a copy code snippet button and why it matters',
    author: 'Salma Alam-Naylor',
    type: Type.BLOG,
  },

  {
    url: 'https://99percentinvisible.org/episode/children-of-the-magenta-automation-paradox-pt-1/',
    title: 'Children of the Magenta: Automation Paradox, Pt. 1',
    author: '99% Invisible',
    type: Type.PODCAST,
  },
  {
    url: 'https://whitep4nth3r.com/blog/how-to-build-a-copy-code-snippet-button/',
    title: 'How to build a copy code snippet button and why it matters',
    author: 'Salma Alam-Naylor',
    type: Type.BLOG,
  },

  {
    url: 'https://99percentinvisible.org/episode/children-of-the-magenta-automation-paradox-pt-1/',
    title: 'Children of the Magenta: Automation Paradox, Pt. 1',
    author: '99% Invisible',
    type: Type.PODCAST,
  },
  {
    url: 'https://whitep4nth3r.com/blog/how-to-build-a-copy-code-snippet-button/',
    title: 'How to build a copy code snippet button and why it matters',
    author: 'Salma Alam-Naylor',
    type: Type.BLOG,
  },

  {
    url: 'https://99percentinvisible.org/episode/children-of-the-magenta-automation-paradox-pt-1/',
    title: 'Children of the Magenta: Automation Paradox, Pt. 1',
    author: '99% Invisible',
    type: Type.PODCAST,
  },
  {
    url: 'https://whitep4nth3r.com/blog/how-to-build-a-copy-code-snippet-button/',
    title: 'How to build a copy code snippet button and why it matters',
    author: 'Salma Alam-Naylor',
    type: Type.BLOG,
  },
];
