require('dotenv-safe').config();
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const eleventyRssPlugin = require('@11ty/eleventy-plugin-rss');
const eleventySyntaxPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const helpers = require('./helpers');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyRssPlugin);
  eleventyConfig.addPlugin(eleventySyntaxPlugin);

  eleventyConfig.addLayoutAlias('main', 'layouts/main.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('writing', 'layouts/writing.njk');
  eleventyConfig.addLayoutAlias('daily', 'layouts/daily.njk');

  eleventyConfig.setTemplateFormats(['njk', 'md', 'css', 'map', 'png', 'jpg', 'webp', 'woff2']);

  eleventyConfig.addFilter('formatDate', helpers.dateFormat);
  eleventyConfig.addFilter('dateDiff', helpers.dateDiff);
  eleventyConfig.addFilter('playlistImage', helpers.playlistImage);

  eleventyConfig.addCollection('latest_writing', function (collectionApi) {
    return collectionApi.getFilteredByTag('writing').reverse().slice(0, 1);
  });

  eleventyConfig.addCollection('latest_daily', function (collectionApi) {
    return collectionApi.getFilteredByTag('daily').reverse().slice(0, 1);
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
