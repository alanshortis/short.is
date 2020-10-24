require('dotenv-safe').config();
const fs = require('fs');
const navigationPlugin = require('@11ty/eleventy-navigation');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');
const filters = require('./filters');

const input = 'src';
const output = 'dist';

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(navigationPlugin);
  eleventyConfig.addPlugin(rssPlugin);
  eleventyConfig.addPlugin(syntaxPlugin, { templateFormats: ['md'] });

  eleventyConfig.setTemplateFormats(['md', 'njk']);

  eleventyConfig.addPassthroughCopy(`${input}/*.js`);
  eleventyConfig.addPassthroughCopy(`${input}/*.css`);
  eleventyConfig.addPassthroughCopy(`${input}/manifest.json`);

  eleventyConfig.addLayoutAlias('main', 'layouts/main.njk');
  eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
  eleventyConfig.addLayoutAlias('writing', 'layouts/writing.njk');

  eleventyConfig.addFilter('formatDate', filters.dateFormat);
  eleventyConfig.addFilter('dateDiff', filters.dateDiff);

  // Minify HTML
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

  // Enable 404 for local development
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const fourOhFour = fs.readFileSync(`${output}/404/index.html`);

        browserSync.addMiddleware('*', (req, res) => {
          res.write(fourOhFour);
          res.end();
        });
      },
    },
  });

  return {
    dir: {
      input,
      output,
    },
  };
};
