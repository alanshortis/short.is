import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const NextPrev = ({ pageContext }) => {
  const { newer, older } = pageContext;
  return (
    <div>
      {newer && <Link to={newer.frontmatter.slug}>{newer.frontmatter.title}</Link>}
      {older && <Link to={older.frontmatter.slug}>{older.frontmatter.title}</Link>}
    </div>
  );
};

NextPrev.propTypes = {
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

export default NextPrev;
