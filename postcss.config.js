const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');

module.exports = ctx => ({
  map: ctx.options.map,
  plugins: [
    postcssPresetEnv({
      stage: 1,
    }),
    ctx.env === 'production' && cssnano({ preset: 'default' }),
  ],
});
