import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavContainer = styled.nav`
  border-top: ${p => p.theme.border} solid currentColor;
  display: grid;
  grid-gap: ${p => p.theme.contentMargin};
  grid-template-columns: 1fr;
  margin-top: ${p => p.theme.contentMargin};
  max-width: ${p => p.theme.container};
  padding-top: ${p => p.theme.contentMargin};
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
  padding: ${p => p.theme.contentMargin};
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
  const { next, prev } = pageContext;
  const noPrev = prev === null;
  return (
    <NavContainer noPrev={noPrev}>
      {prev ? (
        <StyledLink to={prev.frontmatter.slug}>
          <p className="smallcaps">&#8592; previous</p>
          <h2>{prev.frontmatter.title}</h2>
        </StyledLink>
      ) : (
        <div />
      )}
      {next && (
        <StyledLink to={next.frontmatter.slug} align="right">
          <p className="smallcaps">next &#8594;</p>
          <h2>{next.frontmatter.title}</h2>
        </StyledLink>
      )}
    </NavContainer>
  );
};

NextPost.propTypes = {
  pageContext: PropTypes.shape({
    next: PropTypes.shape({
      frontmatter: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
    prev: PropTypes.shape({
      frontmatter: PropTypes.shape({
        slug: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default NextPost;
