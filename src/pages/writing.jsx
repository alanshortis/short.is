import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostList from '../components/PostList';

const Writing = () => (
  <Layout>
    <SEO title="Writing" />
    <h1>Writing</h1>
    <PostList />
  </Layout>
);

export default Writing;
