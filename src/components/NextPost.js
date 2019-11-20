import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavContainer = styled.nav`
  border-top: ${p => p.theme.border} solid currentColor;
  display: grid;
  grid-gap: var(--margin);
  grid-template-columns: 1fr;
  margin-top: var(--margin);
  max-width: ${p => p.theme.container};
  padding-top: var(--margin);
  @media ${p => p.theme.media.smallMin} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledLink = styled(Link)`
  border: ${p => p.theme.border} solid currentColor;
  box-shadow: 0 0 0 0 currentColor;
  color: currentColor;
  display: block;
  height: 100%;
  padding: var(--margin);
  text-align: ${p => (p.align === 'right' ? 'right' : 'left')};
  text-decoration: none;
  transition: all ${p => p.theme.transitionSpeed} ${p => p.theme.transitionTiming};
  &:hover {
    box-shadow: 0 0 0 ${p => p.theme.border} currentColor;
  }
  h2 {
    margin-bottom: 0;
  }
`;

const NextPost = ({ pageContext }) => {
  const { newer, older } = pageContext;
  return (
    <NavContainer>
      {older ? (
        <StyledLink to={older.frontmatter.slug}>
          <p className="smallcaps">&#8592; older</p>
          <h2>{older.frontmatter.title}</h2>
        </StyledLink>
      ) : (
        <div />
      )}
      {newer && (
        <StyledLink to={newer.frontmatter.slug} align="right">
          <p className="smallcaps">newer &#8594;</p>
          <h2>{newer.frontmatter.title}</h2>
        </StyledLink>
      )}
    </NavContainer>
  );
};

NextPost.propTypes = {
  pageContext: PropTypes.shape({
    newer: PropTypes.shape({
      frontmatter: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
    older: PropTypes.shape({
      frontmatter: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default NextPost;
