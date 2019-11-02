import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Playlist from './Playlist';
import { Layout, Meta } from '../../components';

const Container = styled.ol`
  display: grid;
  margin: 0 auto;
  max-width: ${p => p.theme.container};
  padding: ${p => p.theme.contentMargin};
  width: 100%;
`;

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
              tracks {
                total
              }
              images {
                height
                width
                url
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
        <Container>
          {edges.map(playlist => (
            <Playlist key={playlist.node.spotifyId} playlist={playlist} />
          ))}
        </Container>
      </Layout>
    </>
  );
};

export default Playlists;
