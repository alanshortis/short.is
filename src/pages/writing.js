import React from 'react';
import { Layout, Meta, Grid } from '../components';
import Post from '../components/writing/Post';
import postQuery from '../components/writing/query';

const Writing = () => {
  const data = postQuery();

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
