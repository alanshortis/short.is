import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { StyledPost, CodeFont, PostContainer, PostIntro, PostTitle } from './PostPage.style';
import { Layout, Time, Meta, NextPost } from '..';

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
          <CodeFont />
          <Time date={date} />
          <PostTitle>{title}</PostTitle>
          <PostIntro>{intro}</PostIntro>
          <StyledPost>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </StyledPost>
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
      }),
    }),
  }).isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default Post;
