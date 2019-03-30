import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import List from './components/List';

const Playlists = () => (
  <Layout>
    <SEO title="Playlists" />
    <h1>Playlists</h1>
    <List />
  </Layout>
);

export default Playlists;
