import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dateDiff from '../functions/date-diff';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: ${p => p.theme.color.accent};
  }
`;

const Time = ({ date, withNewLabel, pre }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const isNew = dateDiff(date) < 28 && withNewLabel;

  return (
    <Container className="smallcaps">
      {pre ? (
        <span>
          {pre}: <time dateTime={date}>{formattedDate}</time>
        </span>
      ) : (
        <time dateTime={date}>{formattedDate}</time>
      )}
      {isNew && <p>New</p>}
    </Container>
  );
};

Time.propTypes = {
  date: PropTypes.string.isRequired,
  withNewLabel: PropTypes.bool,
  pre: PropTypes.bool,
};

Time.defaultProps = {
  withNewLabel: false,
  pre: '',
};

export default Time;
