const { version } = require('../../package.json');
const thisYear = new Date().getFullYear();

module.exports = {
  version,
  thisYear,
  lang: 'en-GB',
  author: 'Alan Shortis',
  email: 'hello@short.is',
  title: 'Alan Shortis',
  shortTitle: 'short.is',
  description: 'Alan Shortis is a Web Developer',
  url: 'https://short.is',
  twitter: '@alanshortis',
  social: {
    'https://github.com/alanshortis': 'GitHub',
    'https://www.instagram.com/ashortis/': 'Instagram',
    'https://www.last.fm/user/ashortis': 'Last.fm',
    'https://www.strava.com/athletes/138800': 'Strava',
    'https://twitter.com/alanshortis': 'Twitter',
  },
  sections: {
    writing: 'Writing',
    photography: 'Photography',
    playlists: 'Playlists',
    about: 'About',
  },
};
