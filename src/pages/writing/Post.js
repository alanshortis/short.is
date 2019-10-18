import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Time } from '../../components';

const Post = ({ node }) => {
  const { slug, title, date } = node.frontmatter;
  return (
    <li>
        <h2>{title}</h2>
        <Time date={date} />
        <p>{node.excerpt}</p>
    </li>
  );
};

Post.propTypes = {
  node: PropTypes.shape({
    excerpt: PropTypes.string,
    frontmatter: PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
    }),
  }).isRequired,
};

export default Post;
