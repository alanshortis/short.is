import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';

const AgeMessage = styled.div`
  background-color: ${p => transparentize(0.95, p.theme.color.type)};
  padding: calc(${p => p.theme.contentMargin} / 4);
  p {
    padding: 0 ${p => p.theme.contentMargin};
    margin: 0 auto;
    max-width: ${p => p.theme.container};
    width: 100%;
  }
`;

const PostAge = ({ date }) => {
  const today = new Date();
  const postDate = new Date(date);
  const ageDays = (today - postDate) / (1000 * 3600 * 24);

  // More than 2 years old.
  if (ageDays > 731) {
    return (
      <AgeMessage>
        <p>This post is more than 2 years old so may be out of date.</p>
      </AgeMessage>
    );
  }
  return null;
};

PostAge.propTypes = {
  date: PropTypes.string.isRequired,
};

export default PostAge;
