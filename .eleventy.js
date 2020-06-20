const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const eleventyRssPlugin = require('@11ty/eleventy-plugin-rss');
const eleventySyntaxPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyRssPlugin);
  eleventyConfig.addPlugin(eleventySyntaxPlugin);
  eleventyConfig.addLayoutAlias('main', 'main.njk');
  eleventyConfig.setTemplateFormats(['njk', 'md', 'css', 'png']);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
