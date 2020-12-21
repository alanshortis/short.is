const filters = require('./filters');

const input = 'src';
const output = 'dist';

module.exports = eleventyConfig => {
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
