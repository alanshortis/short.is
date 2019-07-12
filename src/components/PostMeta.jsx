import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Meta = styled.div`
  text-transform: uppercase;
`;

const Time = styled.time`
  padding-right: 1rem;
  margin-right: 1rem;
  border-right: ${p => p.theme.borderWidth} solid ${p => p.theme.color.typeLight};
`;

const PostMeta = ({ date, category }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <Meta>
      <Time dateTime={date}>{formattedDate}</Time> {category}
    </Meta>
  );
};

PostMeta.propTypes = {
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default PostMeta;
