import React from 'react';
import PropTypes from 'prop-types';
import { Time, Grid } from '..';

const Post = ({ node }) => {
  const { slug, title, date, intro } = node.frontmatter;
  return (
    <Grid.ItemContainer>
      <Grid.Item to={slug}>
        <div>
          <Time date={date} withNewLabel />
        </div>
        <h2>{title}</h2>
        <p>{intro}</p>
      </Grid.Item>
    </Grid.ItemContainer>
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
