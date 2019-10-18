import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Post = ({ node }) => {
  const { slug, title, date } = node.frontmatter;
  return (
    <li>
      <Link to={slug}>
        {title}
        {date}
        {node.excerpt}
      </Link>
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
