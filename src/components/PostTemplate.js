import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import SEO from './SEO';
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
      <SEO title={title} description={intro} pathName={slug} />
      <Layout>
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

export default WritingTemplate;
