/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
};

module.exports = nextConfig;
