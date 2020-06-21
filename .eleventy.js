const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const eleventyRssPlugin = require('@11ty/eleventy-plugin-rss');
const eleventySyntaxPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyRssPlugin);
  eleventyConfig.addPlugin(eleventySyntaxPlugin);

  eleventyConfig.addLayoutAlias('main', 'layouts/main.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('writing', 'layouts/writing.njk');
  eleventyConfig.addLayoutAlias('daily', 'layouts/daily.njk');

  eleventyConfig.setTemplateFormats(['njk', 'md', 'css', 'png']);

  eleventyConfig.addFilter('formatDate', date => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  });

  eleventyConfig.addFilter('dateDiff', date => {
    const today = new Date();
    const postDate = new Date(date);
    const ageDays = (today - postDate) / (1000 * 3600 * 24);

    return Math.round(ageDays);
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
