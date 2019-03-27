import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Layout from './Layout';

// TODO: Move this to prism styles
const PostBody = styled.article`
  span.gatsby-highlight-code-line {
    display: block;
    background-color: #dd6969;
  }
`;

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
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <PostBody>
        <MDXRenderer>{mdx.code.body}</MDXRenderer>
      </PostBody>
    </Layout>
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
