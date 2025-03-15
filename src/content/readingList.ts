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

export const readingList: Array<Reading> = [
  {
    url: 'https://ethanmarcotte.com/wrote/leaving-18f/',
    title: 'Moving on from 18F',
    author: 'Ethan Marcotte',
    type: Type.BLOG,
  },
  {
    url: 'https://aresluna.org/the-hardest-working-font-in-manhattan',
    title: 'The hardest working font in Manhattan',
    author: 'Marcin Wichary',
    type: Type.BLOG,
  },
  {
    url: 'https://www.miriamsuzanne.com/2025/02/12/tech-ai-wtf/',
    title: 'Tech continues to be political',
    author: 'Miriam Suzanne',
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
    url: 'https://www.w3.org/TR/ethical-web-principles/',
    title: 'Ethical Web Principles',
    author: 'W3C',
    type: Type.ARTICLE,
  },
  {
    url: 'https://world.org/blog/engineering/humanness-in-the-age-of-ai',
    title: 'Humanness in the Age of AI',
    author: 'World',
    type: Type.BLOG,
  },
];
