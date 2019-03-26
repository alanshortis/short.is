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
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'Alan Shortis',
    //     short_name: 'short.is',
    //     start_url: '/',
    //     background_color: '#663399',
    //     theme_color: '#663399',
    //     display: 'minimal-ui',
    //     icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
    //   },
    // },
    // 'gatsby-plugin-offline',
  ],
};
