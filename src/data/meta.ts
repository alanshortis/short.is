import { createContext } from 'react';

export const meta = Object.freeze({
  author: 'Alan Shortis',
  description: 'Alan Shortis is a front end developer',
  email: 'hello@short.is',
  title: 'Alan Shortis',
  twitter: '@alanshortis',
  url: 'https://short.is',
  year: new Date().getFullYear(),
  social: [
    { name: 'CodePen', url: 'https://codepen.io/alanshortis' },
    { name: 'GitHub', url: 'https://github.com/alanshortis' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/alan-shortis-575a1b35/' },
    { name: 'Strava', url: 'https://www.strava.com/athletes/138800' },
    { name: 'Twitter', url: 'https://twitter.com/alanshortis' },
  ],
});

export const MetaContext = createContext(meta);
