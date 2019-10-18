import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDate = styled.time`
  display: block;
  font-size: 0.79rem;
  letter-spacing: 3px;
  margin-bottom: calc(${p => p.theme.contentMargin} / 2);
  text-transform: uppercase;
`;

const Time = ({ date }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return <StyledDate dateTime={date}>{formattedDate}</StyledDate>;
};

Time.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Time;
