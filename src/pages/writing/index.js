import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout, Meta } from '../../components';
import Post from './Post';

const Writing = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              excerpt
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
    <>
      <Meta title="Writing" />
      <Layout isDark>
        <ol>
          {data.allMdx.edges.map(({ node }) => (
            <Post key={node.frontmatter.slug} node={node} />
          ))}
        </ol>
      </Layout>
    </>
  );
};

export default Writing;
