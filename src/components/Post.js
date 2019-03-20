import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import parser from 'react-html-parser';
import Layout from './Layout';

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
      }
    }
  }
`;

const Post = ({ data }) => {
  const { markdownRemark } = data;
  const { title, date } = markdownRemark.frontmatter;
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <div>{parser(markdownRemark.html)}</div>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.node,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
    }),
  }).isRequired,
};
