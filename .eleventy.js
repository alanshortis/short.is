const filters = require('./filters');

const input = 'src';
const output = 'dist';

module.exports = eleventyConfig => {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy(`${input}/*.css`);
  eleventyConfig.addPassthroughCopy(`${input}/*.js`);
  eleventyConfig.addPassthroughCopy(`${input}/*.map`);

  eleventyConfig.addLayoutAlias('main', 'layouts/main.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

  eleventyConfig.addFilter('dateFormat', filters.dateFormat);
  eleventyConfig.addFilter('dateDiff', filters.dateDiff);

  return {
    dir: {
      input,
      output,
    },
  };
};
