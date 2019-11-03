import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Time, Grid } from '../../components';

const StyledPost = styled.li`
  display: block;
  &:first-child {
    grid-column: 1 / -1;
  }
`;

const Post = ({ node }) => {
  const { slug, title, date, intro } = node.frontmatter;
  return (
    <StyledPost>
      <Grid.Item to={slug}>
        <div>
          <Time date={date} withNewLabel />
        </div>
        <h2>{title}</h2>
        <p>{intro}</p>
      </Grid.Item>
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
