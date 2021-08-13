import { createContext } from 'react';

const meta = {
  author: 'Alan Shortis',
  description: 'Alan Shortis is a front end developer',
  email: 'hello@short.is',
  title: 'Alan Shortis',
  twitter: '@alanshortis',
  url: 'https://short.is',
  year: new Date().getFullYear(),
};

const MetaContext = createContext(meta);

export default MetaContext;
