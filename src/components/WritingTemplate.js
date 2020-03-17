import React from 'react';
import { graphql, Link } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import SEO from './SEO';
import Layout from './Layout';

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
  const { mdx } = data;
  const { title, date, intro } = mdx.frontmatter;

  return (
    <>
      <SEO title={title} description={intro} pathName={pageContext.slug} />
      <Layout>
        <time>{date}</time>
        <h1>{title} POST TEMPLATE</h1>
        <p>{intro}</p>
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

export default WritingTemplate;
