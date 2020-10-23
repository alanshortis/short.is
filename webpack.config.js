const path = require('path');

module.exports = ({ NODE_ENV }) => {
  const isProd = NODE_ENV === 'production';

  return {
    mode: NODE_ENV,
    watch: !isProd,
    devtool: isProd ? false : 'source-map',
    entry: {
      app: './src/js/app.js',
      sw: './src/js/serviceworker.js',
    },
    output: {
      path: path.resolve(__dirname, 'src'),
      filename: '[name].js',
    },
  };
};
