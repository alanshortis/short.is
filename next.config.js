module.exports = {
  redirects: async () => {
    return [
      {
        source: '/daily/page/1',
        destination: '/daily',
        permanent: true,
      },
    ];
  },
};
