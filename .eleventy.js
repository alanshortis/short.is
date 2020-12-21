const input = 'src';
const output = 'dist';

module.exports = eleventyConfig => {
  eleventyConfig.addLayoutAlias('main', 'layouts/main.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('writing', 'layouts/writing.njk');

  return {
    dir: {
      input,
      output,
    },
  };
};
