import React from 'react';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import SEO from './SEO';
import Layout from './Layout';
import NextPrev from './NextPrev';

export const query = graphql`
  query DailyQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;

const DailyTemplate = ({ data, pageContext }) => {
  const { date, title, slug } = data.mdx.frontmatter;
  return (
    <>
      <SEO title={title} pathName={slug} />
      <Layout>
        <time>{date}</time>
        <h1>{title} DAILY TEMPLATE</h1>
        <div>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
        <NextPrev pageContext={pageContext} />
      </Layout>
    </>
  );
};

export default DailyTemplate;
