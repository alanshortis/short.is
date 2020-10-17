require('dotenv-safe').config();
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addLayoutAlias('main', 'layouts/main.njk');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
