import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from 'styled-components';
import Layout from './Layout';
import SEO from './SEO';
import PostDate from './PostDate';
import PrismStyles from '../styles/PrismStyles';

const Article = styled.article`
  max-width: 60rem;
  margin: 0 auto;
  width: 100%;
  padding: 0 2rem;
`;

export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      code {
        body
      }
      excerpt
    }
  }
`;

const Post = ({ data }) => {
  const { mdx } = data;
  const { title, date } = mdx.frontmatter;
  const { body } = mdx.code;

  return (
    <Layout>
      <SEO title={title} description={mdx.excerpt} />
      <Article>
        <PrismStyles />
        <h1>{title}</h1>
        <PostDate date={date} />
        <MDXRenderer>{body}</MDXRenderer>
      </Article>
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
