import { createContext } from 'react';

const meta = {
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
    { name: 'Instagram', url: 'https://www.instagram.com/ashortis/' },
    { name: 'LastFm', url: 'https://www.last.fm/user/ashortis' },
    { name: 'Strava', url: 'https://www.strava.com/athletes/138800' },
    { name: 'Twitter', url: 'https://twitter.com/alanshortis' },
  ],
};

const MetaContext = createContext(meta);

export default MetaContext;
