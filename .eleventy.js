require('dotenv-safe').config();
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const eleventyRssPlugin = require('@11ty/eleventy-plugin-rss');
const eleventySyntaxPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const date = require('./helpers');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyRssPlugin);
  eleventyConfig.addPlugin(eleventySyntaxPlugin);

  eleventyConfig.addLayoutAlias('main', 'layouts/main.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('writing', 'layouts/writing.njk');
  eleventyConfig.addLayoutAlias('daily', 'layouts/daily.njk');

  eleventyConfig.setTemplateFormats(['njk', 'md', 'css', 'png', 'jpg', 'webp']);

  eleventyConfig.addFilter('formatDate', date.format);
  eleventyConfig.addFilter('dateDiff', date.diff);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
