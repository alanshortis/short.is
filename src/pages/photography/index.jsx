import React from 'react';
import Layout from '../../components/Layout';
import List from './components/List';
import SEO from '../../components/SEO';

const photoIds = [6, 7, 8, 34, 30, 3, 29, 28, 27, 26, 23, 21, 20, 2, 19, 18, 17, 15, 11, 10, 999];

const Photography = () => (
  <Layout>
    <SEO title="Photography" />
    <h1>Photography</h1>
    <List photos={photoIds} />
  </Layout>
);

export default Photography;
