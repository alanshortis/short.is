import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PlaylistList from '../components/PlaylistList';

const Playlists = () => (
  <Layout>
    <SEO title="Playlists" />
    <h1>Playlists</h1>
    <PlaylistList />
  </Layout>
);

export default Playlists;
