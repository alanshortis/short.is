import { createContext } from 'react';

export const meta = Object.freeze({
  author: 'Alan Shortis',
  description: 'Alan Shortis is a front end developer',
  email: 'hello@short.is',
  title: 'Alan Shortis',
  twitter: '@alanshortis',
  url: 'https://short.is',
  year: new Date().getFullYear(),
});

export const MetaContext = createContext(meta);
