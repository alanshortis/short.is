import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Layout from './Layout';
import SEO from './SEO';
import PostMeta from './PostMeta';
import Article from './Post.styles';
import PrismStyles from '../styles/PrismStyles';

export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        category
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
  const { title, date, category } = mdx.frontmatter;
  const { body } = mdx.code;

  return (
    <Layout>
      <SEO title={title} description={mdx.excerpt} />
      <Article>
        <PrismStyles />
        <h1>{title}</h1>
        <PostMeta date={date} category={category} />
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
