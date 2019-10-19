import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { Layout, Time, Meta, NextPost } from '../../components';

const PostContainer = styled.article`
  margin: 0 auto;
  max-width: ${p => p.theme.container};
  padding: ${p => p.theme.contentMargin};
  width: 100%;
`;

const PostIntro = styled.p`
  font-size: 1.2rem;
  padding-bottom: ${p => p.theme.contentMargin};
  margin-bottom: ${p => p.theme.contentMargin};
  border-bottom: ${p => p.theme.border} solid currentColor;
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

const Post = ({ data, pageContext }) => {
  const { mdx } = data;
  const { title, date, intro } = mdx.frontmatter;

  return (
    <>
      <Meta title={title} description={intro} />
      <Layout>
        <PostContainer>
          <Time date={date} />
          <h1>{title}</h1>
          <PostIntro>{intro}</PostIntro>
          <MDXRenderer>{mdx.body}</MDXRenderer>
          <NextPost pageContext={pageContext} />
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
        codepen: PropTypes.string,
        github: PropTypes.string,
      }),
    }),
  }).isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default Post;
