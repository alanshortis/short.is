type Reading = {
  url: `https://${string}`;
  title: string;
  author: string;
};

export const readingList: Array<Reading> = [
  {
    url: 'https://hidde.blog/ethical-ai/',
    title: 'Is “ethical AI” an oxymoron?',
    author: 'Hidde de Vries',
  },
  {
    url: 'https://brilliantcrank.com/eject-disk/',
    title: 'Eject Disk.',
    author: 'Greg Storey',
  },
  {
    url: 'https://ethanmarcotte.com/wrote/leaving-18f/',
    title: 'Moving on from 18F',
    author: 'Ethan Marcotte',
  },
  {
    url: 'https://aresluna.org/the-hardest-working-font-in-manhattan',
    title: 'The hardest working font in Manhattan',
    author: 'Marcin Wichary',
  },
  {
    url: 'https://www.miriamsuzanne.com/2025/02/12/tech-ai-wtf/',
    title: 'Tech continues to be political',
    author: 'Miriam Suzanne',
  },
  {
    url: 'https://99percentinvisible.org/episode/children-of-the-magenta-automation-paradox-pt-1/',
    title: 'Children of the Magenta: Automation Paradox, Pt. 1',
    author: '99% Invisible',
  },
  {
    url: 'https://whitep4nth3r.com/blog/how-to-build-a-copy-code-snippet-button/',
    title: 'How to build a copy code snippet button and why it matters',
    author: 'Salma Alam-Naylor',
  },
  {
    url: 'https://www.w3.org/TR/ethical-web-principles/',
    title: 'Ethical Web Principles',
    author: 'W3C',
  },
  {
    url: 'https://world.org/blog/engineering/humanness-in-the-age-of-ai',
    title: 'Humanness in the Age of AI',
    author: 'World',
  },
];

export const recentReadingList: Array<Reading> = readingList.slice(0, 7);
