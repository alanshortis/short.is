import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import PrismTheme from '../styles/PrismTheme';
import Layout from './Layout';

export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
      }
      code {
        body
      }
    }
  }
`;

const Post = ({ data }) => {
  const { mdx } = data;
  const { title, date } = mdx.frontmatter;
  return (
    <>
      <PrismTheme />
      <Layout>
        <h1>{title}</h1>
        <p>{date}</p>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </Layout>
    </>
  );
};

export default Post;

Post.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      code: PropTypes.shape({
        body: PropTypes.node,
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
      }),
    }),
  }).isRequired,
};
