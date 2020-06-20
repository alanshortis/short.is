const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addLayoutAlias('main', 'main.njk');
  eleventyConfig.setTemplateFormats(['njk', 'md', 'css', 'txt', 'json', 'js', 'png']);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
