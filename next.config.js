module.exports = {
  redirects: () => {
    return [
      {
        source: '/daily/page/1',
        destination: '/daily',
        permanent: true,
      },
    ];
  },
};
