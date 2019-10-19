/**
 * Calculate days since a given date.
 * @param {string} date - A date as a string.
 * @return {number} Days since the given date.
 */

const dateDiff = date => {
  const today = new Date();
  const postDate = new Date(date);
  const ageDays = (today - postDate) / (1000 * 3600 * 24);

  return Math.round(ageDays);
};

export default dateDiff;
