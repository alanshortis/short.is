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
