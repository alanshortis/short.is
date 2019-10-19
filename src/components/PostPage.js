import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { Layout, Time, Meta } from '.';

const PostContainer = styled.article`
  margin: 0 auto;
  max-width: ${p => p.theme.container};
  padding: ${p => p.theme.contentMargin};
  width: 100%;
`;

export const query = graphql`
  query PostQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
        intro
      }
    }
  }
`;

const Post = ({ data }) => {
  const { mdx } = data;
  const { title, date, intro } = mdx.frontmatter;

  return (
    <>
      <Meta title={title} description={intro} />
      <Layout>
        <PostContainer>
          <h1>{title}</h1>
          <Time date={date} />
          <blockquote>{intro}</blockquote>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </PostContainer>
      </Layout>
    </>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      body: PropTypes.node,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        intro: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Post;
