const path = require('path');

module.exports = ({ NODE_ENV }) => {
  const isProd = NODE_ENV === 'production';

  return {
    mode: NODE_ENV,
    watch: !isProd,
    devtool: isProd ? false : 'source-map',
    entry: './src/src/js/index.js',
    output: {
      path: path.resolve(__dirname, 'src/js'),
      filename: 'index.js',
    },
  };
};
