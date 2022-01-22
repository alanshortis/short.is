const presets = ['next/babel'];
const plugins = [];

if (process.env.NODE_ENV !== 'production') {
  plugins.push('styled-components');
}

module.exports = { presets, plugins };
