import React from 'react';
import { Layout, Meta } from '../../components';
import playlistQuery from './query';
import List from './List';

const Playlists = () => {
  const data = playlistQuery();
  return (
    <>
      <Meta title="Playlists" />
      <Layout isDark>
        <List playlists={data.annual} />
        <List playlists={data.playlists} />
      </Layout>
    </>
  );
};

export default Playlists;
