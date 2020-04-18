require('dotenv-safe').config();

module.exports = {
  siteMetadata: {
    author: 'Alan Shortis',
    description: 'Alan Shortis is a web developer',
    title: 'Alan Shortis',
    twitterUsername: '@alanshortis',
    siteUrl: 'https://short.is',
    ogImage: '/og.png',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts/writing`,
        name: 'writing',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts/daily`,
        name: 'daily',
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Alan Shortis',
        short_name: 'short.is',
        start_url: '/',
        background_color: '#1a1a1a',
        theme_color: '#dd6969',
        display: 'standalone',
        icon: 'src/img/icon.png',
      },
    },
    'gatsby-plugin-offline', // Must be after manifest plugin
    'gatsby-plugin-react-helmet',
  ],
};
