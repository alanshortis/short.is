import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';

const Daily = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMdx(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fileAbsolutePath: { regex: "/daily/" } }
        ) {
          edges {
            node {
              frontmatter {
                slug
                title
                date
              }
            }
          }
        }
      }
    `
  );

  return (
    <Layout title="Daily" pathName="/daily">
      <p>Daily</p>
      {data.allMdx.edges.map(({ node }) => (
        <PostItem node={node} />
      ))}
    </Layout>
  );
};

export default Daily;
