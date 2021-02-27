const daysSince = (date: string): number => {
  const today = new Date().getTime();
  const postDate = new Date(date).getTime();

  return Math.floor((today - postDate) / (1000 * 3600 * 24));
};

export default daysSince;
