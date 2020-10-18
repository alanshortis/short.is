require('dotenv-safe').config();
const navigationPlugin = require('@11ty/eleventy-navigation');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');
const filters = require('./filters');

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(navigationPlugin);
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(syntaxPlugin, { templateFormats: ['md'] });

  eleventyConfig.setTemplateFormats(['md', 'njk']);
  eleventyConfig.addPassthroughCopy('src/assets');

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addLayoutAlias('main', 'layouts/main.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('writing', 'layouts/writing.njk');

  eleventyConfig.addFilter('formatDate', filters.dateFormat);
  eleventyConfig.addFilter('dateDiff', filters.dateDiff);

  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
  };
};
