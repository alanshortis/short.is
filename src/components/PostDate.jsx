import React from 'react';
import PropTypes from 'prop-types';

const PostDate = ({ date }) => {
  const dateObject = new Date(date);
  const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = dateObject.toLocaleDateString('en-GB', dateOptions);

  return <time dateTime={date}>{formattedDate}</time>;
};

PostDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default PostDate;
