import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout, Meta, Grid } from '../../components';
import Post from './Post';

const Writing = () => {
  const data = useStaticQuery(
    graphql`
      {
        allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
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
    <>
      <Meta title="Writing" />
      <Layout isDark>
        <Grid.Container>
          {data.allMdx.edges.map(({ node }) => (
            <Post key={node.frontmatter.slug} node={node} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export default Writing;
