require('dotenv-safe').config();

module.exports = eleventyConfig => {
  eleventyConfig.addLayoutAlias('main', 'layouts/main.njk');

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
