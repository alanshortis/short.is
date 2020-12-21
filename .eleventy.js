const input = 'src';
const output = 'dist';

module.exports = eleventyConfig => {
  return {
    dir: {
      input,
      output,
    },
  };
};
