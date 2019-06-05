import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Post = ({ slug, title, date }) => (
  <Link key={slug} to={slug}>
    <h2>{title}</h2>
    <p>{date}</p>
  </Link>
);

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Post;
