import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostList from '../components/PostList';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>short.is</h1>
    <PostList />
  </Layout>
);

export default IndexPage;
