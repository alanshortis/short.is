import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Layout, Meta } from '../../components';
import Post from './Post';

const Container = styled.ol`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${p => p.theme.contentMargin};
  margin: 0 auto;
  max-width: ${p => p.theme.container};
  padding: ${p => p.theme.contentMargin};
  width: 100%;
  @media ${p => p.theme.media.smallMin} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

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
        <Container>
          {data.allMdx.edges.map(({ node }) => (
            <Post key={node.frontmatter.slug} node={node} />
          ))}
        </Container>
      </Layout>
    </>
  );
};

export default Writing;
