import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Time } from '../../components';

const StyledPost = styled.li`
  display: block;
  &:first-child {
    grid-column: 1 / -1;
  }
`;

const StyledLink = styled(Link)`
  border: ${p => p.theme.border} solid currentColor;
  box-shadow: 0 0 0 0 currentColor;
  color: currentColor;
  display: block;
  height: 100%;
  padding: ${p => p.theme.contentMargin};
  text-decoration: none;
  transition: all ${p => p.theme.transitionSpeed} ${p => p.theme.transitionTiming};
  &:hover {
    box-shadow: 0 0 0 ${p => p.theme.border} currentColor;
  }
`;

const Post = ({ node }) => {
  const { slug, title, date, intro } = node.frontmatter;
  return (
    <StyledPost>
      <StyledLink to={slug}>
        <Time date={date} />
        <h2>{title}</h2>
        <p>{intro}</p>
      </StyledLink>
    </StyledPost>
  );
};

Post.propTypes = {
  node: PropTypes.shape({
    frontmatter: PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
      intro: PropTypes.string,
    }),
  }).isRequired,
};

export default Post;
