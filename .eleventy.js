require('dotenv-safe').config();
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const eleventyRssPlugin = require('@11ty/eleventy-plugin-rss');
const eleventySyntaxPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const helpers = require('./helpers');

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyRssPlugin);
  eleventyConfig.addPlugin(eleventySyntaxPlugin);

  eleventyConfig.addLayoutAlias('main', 'layouts/main.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('writing', 'layouts/writing.njk');
  eleventyConfig.addLayoutAlias('daily', 'layouts/daily.njk');

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.setTemplateFormats(['md', 'njk', 'png']);
  eleventyConfig.addPassthroughCopy('src/fonts');
  eleventyConfig.addPassthroughCopy('src/photos');
  eleventyConfig.addPassthroughCopy('src/assets');

  eleventyConfig.addFilter('formatDate', helpers.dateFormat);
  eleventyConfig.addFilter('dateDiff', helpers.dateDiff);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
