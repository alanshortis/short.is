import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import PostItem from '../components/PostItem';

const Writing = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMdx(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fileAbsolutePath: { regex: "/writing/" } }
        ) {
          edges {
            node {
              frontmatter {
                slug
                title
                date
                intro
              }
            }
          }
        }
      }
    `
  );

  return (
    <Layout title="Writing" pathName="/writing">
      <p>Writing</p>
      {data.allMdx.edges.map(({ node }) => (
        <PostItem node={node} />
      ))}
    </Layout>
  );
};

export default Writing;
