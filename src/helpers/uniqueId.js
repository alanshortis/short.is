const uniqueId = (prefix = '') => {
  const unique = Math.random().toString(36).substr(2, 8);

  return prefix + unique;
};

export default uniqueId;
