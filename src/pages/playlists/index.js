import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Playlist from './Playlist';
import { Layout, Meta, Grid } from '../../components';

const Playlists = () => {
  const data = useStaticQuery(
    graphql`
      {
        allSpotifyPlaylist {
          edges {
            node {
              spotifyId
              name
              external_urls {
                spotify
              }
              images {
                height
                width
                url
              }
              tracks {
                total
              }
            }
          }
        }
      }
    `
  );

  const { edges } = data.allSpotifyPlaylist;

  return (
    <>
      <Meta title="Playlists" />
      <Layout isDark>
        <Grid.Container>
          {edges.map(playlist => (
            <Playlist key={playlist.node.spotifyId} playlist={playlist} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export default Playlists;
