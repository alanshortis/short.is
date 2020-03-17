import React from 'react';
import { graphql, Link } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import SEO from './SEO';
import Layout from './Layout';

export const query = graphql`
  query DailyQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
      }
    }
  }
`;

const DailyTemplate = ({ data, pageContext }) => {
  const { mdx } = data;
  const { date, title } = mdx.frontmatter;

  console.log(pageContext);

  return (
    <>
      <SEO title={title} pathName={pageContext.slug} />
      <Layout>
        <time>{date}</time>
        <h1>{title} DAILY TEMPLATE</h1>
        <div>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
        <div>
          {pageContext.newer && (
            <Link to={pageContext.newer.frontmatter.slug}>
              {pageContext.newer.frontmatter.title}
            </Link>
          )}
          {pageContext.older && (
            <Link to={pageContext.older.frontmatter.slug}>
              {pageContext.older.frontmatter.title}
            </Link>
          )}
        </div>
      </Layout>
    </>
  );
};

export default DailyTemplate;
