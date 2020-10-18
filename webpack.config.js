const path = require('path');

module.exports = ({ NODE_ENV }) => {
  const isProd = NODE_ENV === 'production';

  return {
    mode: NODE_ENV,
    watch: !isProd,
    devtool: isProd ? false : 'source-map',
    entry: './src/js/index.js',
    output: {
      path: path.resolve(__dirname, 'src/assets'),
      filename: 'index.js',
    },
  };
};
