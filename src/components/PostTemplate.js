import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import Layout from './Layout';
import NextPrev from './NextPrev';

export const query = graphql`
  query WritingQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
        intro
        slug
      }
    }
  }
`;

const WritingTemplate = ({ data, pageContext }) => {
  const { title, date, intro, slug } = data.mdx.frontmatter;
  return (
    <>
      <Layout title={title} description={intro} pathName={slug}>
        <time>{date}</time>
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
        <div>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
        <NextPrev pageContext={pageContext} />
      </Layout>
    </>
  );
};

WritingTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      body: PropTypes.node,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        intro: PropTypes.string,
        slug: PropTypes.string,
      }),
    }),
  }).isRequired,
  pageContext: PropTypes.shape({}).isRequired,
};

export default WritingTemplate;
