import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dateDiff from '../functions/date-diff';

const Container = styled.div`
  display: flex;
  font-size: 0.79rem;
  justify-content: space-between;
  letter-spacing: 3px;
  margin-bottom: calc(${p => p.theme.contentMargin} / 2);
  text-transform: uppercase;
  p {
    color: ${p => p.theme.color.accent};
  }
`;

const Time = ({ date, withNewLabel }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const isNew = dateDiff(date) < 28 && withNewLabel;

  return (
    <Container>
      <time dateTime={date}>{formattedDate}</time>
      {isNew && <p>New</p>}
    </Container>
  );
};

Time.propTypes = {
  date: PropTypes.string.isRequired,
  withNewLabel: PropTypes.bool,
};

Time.defaultProps = {
  withNewLabel: false,
};

export default Time;
