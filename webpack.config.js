const path = require('path');

module.exports = env => {
  return {
    mode: env.NODE_ENV,
    watch: env.NODE_ENV !== 'production',
    entry: './src/js/index.js',
    output: {
      path: path.resolve(__dirname, 'src/assets/js'),
      filename: 'index.js',
    },
  };
};
