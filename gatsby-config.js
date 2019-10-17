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
  ],
};
