require('dotenv-safe').config();

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
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy(`${input}/*.css`);
  eleventyConfig.addPassthroughCopy(`${input}/*.js`);
  eleventyConfig.addPassthroughCopy(`${input}/*.map`);
  eleventyConfig.addPassthroughCopy(`${input}/fonts`);
  eleventyConfig.addPassthroughCopy(`${input}/img`);
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
