require('dotenv').config();
const theme = require('./src/styles/theme.json');

module.exports = {
  siteMetadata: {
    title: 'Alan Shortis',
    description: 'Alan Shortis is a web developer',
    author: 'Alan Shortis',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    '@danbruegge/gatsby-plugin-stylelint',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-spotify',
      options: {
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        refreshToken: process.env.SPOTIFY_REFRESH_TOKEN,
        fetchPlaylists: true,
        fetchRecent: false,
        timeRanges: ['long_term'],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /img/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Alan Shortis',
        short_name: 'short.is',
        start_url: '/',
        background_color: theme.color.backgroundDark,
        theme_color: theme.color.accent,
        display: 'standalone',
        icon: 'src/img/favicon.png',
      },
    },
    // 'gatsby-plugin-offline',
  ],
};
