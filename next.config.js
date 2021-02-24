const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['tsx', 'mdx'],
});

module.exports = {
  target: 'serverless',
};
