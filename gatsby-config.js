require('dotenv').config();

module.exports = {
  siteMetadata: {
    author: 'Alan Shortis',
    description: 'Alan Shortis is a web developer',
    title: 'Alan Shortis',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/img/favicon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-spotify`,
      options: {
        clientId: process.env.SPOTIFY_CLIENT,
        clientSecret: process.env.SPOTIFY_TOKEN,
        refreshToken: process.env.SPOTIFY_REFRESH,
        fetchPlaylists: true,
        fetchRecent: false,
        timeRanges: ['long_term'],
      },
    },
  ],
};
