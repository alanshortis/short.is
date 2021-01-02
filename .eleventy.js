require('dotenv-safe').config();

const rssPlugin = require('@11ty/eleventy-plugin-rss');

const markdownIt = require('markdown-it');
const mila = require('markdown-it-link-attributes');
const filters = require('./filters');

// Configure markdown-it to add attributes to links that start 'http'.
const markdownLib = markdownIt({ html: true }).use(mila, {
  pattern: /^http/,
  attrs: {
    target: '_blank',
    rel: 'noopener noreferrer',
  },
});

const input = 'src';
const output = 'dist';

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(rssPlugin);

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy(`${input}/*.css`);
  eleventyConfig.addPassthroughCopy(`${input}/app.js`);
  eleventyConfig.addPassthroughCopy(`${input}/*.map`);
  eleventyConfig.addPassthroughCopy(`${input}/fonts`);
  eleventyConfig.addPassthroughCopy(`${input}/img`);
  eleventyConfig.addPassthroughCopy(`${input}/manifest.json`);
  eleventyConfig.addPassthroughCopy(`${input}/_redirects`);

  eleventyConfig.addLayoutAlias('main', 'layouts/main.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

  eleventyConfig.addFilter('dateFormat', filters.dateFormat);
  eleventyConfig.addFilter('dateDiff', filters.dateDiff);

  // Use the custom markdown-it config defined above.
  eleventyConfig.setLibrary('md', markdownLib);

  return {
    dir: {
      input,
      output,
    },
  };
};
