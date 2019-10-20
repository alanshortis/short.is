import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ol`
  && {
    margin-bottom: calc(${p => p.theme.contentMargin} * 2);
  }
`;

const IndexTitle = styled.h2`
  && {
    padding-top: 0;
  }
`;

const Contents = ({ sections }) => (
  <>
    <IndexTitle>Index</IndexTitle>
    <StyledList>
      {sections.map(section => (
        <li key={section.hash}>
          <a href={section.hash}>{section.title}</a>
        </li>
      ))}
    </StyledList>
  </>
);

Contents.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      hash: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Contents;
