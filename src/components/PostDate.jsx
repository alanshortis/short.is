import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTime = styled.time`
  text-transform: uppercase;
`;

const PostDate = ({ date }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return <StyledTime dateTime={date}>{formattedDate}</StyledTime>;
};

PostDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default PostDate;
