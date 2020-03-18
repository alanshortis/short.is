import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const PostItem = ({ node }) => {
  const { slug, title, date, intro } = node.frontmatter;
  return (
    <Link to={slug}>
      <time>{date}</time>
      <p>{title}</p>
      {intro && <p>{intro}</p>}
    </Link>
  );
};

PostItem.propTypes = {
  node: PropTypes.shape({
    frontmatter: PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
      intro: PropTypes.string,
    }),
  }).isRequired,
};

export default PostItem;
