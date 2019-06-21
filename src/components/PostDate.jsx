import React from 'react';
import PropTypes from 'prop-types';

const PostDate = ({ date }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return <time dateTime={date}>{formattedDate}</time>;
};

PostDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default PostDate;
