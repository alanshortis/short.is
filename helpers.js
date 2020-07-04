exports.dateFormat = date => {
  return new Date(date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

exports.dateDiff = date => {
  const today = new Date();
  const postDate = new Date(date);
  const ageDays = (today - postDate) / (1000 * 3600 * 24);

  return Math.round(ageDays);
};
