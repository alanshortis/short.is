/* eslint-disable no-param-reassign */
module.exports = {
  webpack: config => {
    config.experiments = { ...config.experiments, ...{ topLevelAwait: true } };

    return config;
  },
};
