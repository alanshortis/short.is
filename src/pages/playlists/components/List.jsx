import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Playlist from './Playlist';

const playlistsQuery = graphql`
  fragment SpotifyFields on SpotifyPlaylistConnection {
    edges {
      node {
        spotifyId
        name
        images {
          url
        }
        external_urls {
          spotify
        }
        tracks {
          total
        }
      }
    }
  }
  query {
    playlists: allSpotifyPlaylist(
      sort: { fields: [order], order: ASC }
      filter: { name: { regex: "/^((?![0-9]{4}).)*$/" } }
    ) {
      ...SpotifyFields
    }
    annual: allSpotifyPlaylist(
      sort: { fields: [order], order: ASC }
      filter: { name: { regex: "/[0-9]{4}/" } }
    ) {
      ...SpotifyFields
    }
  }
`;

const List = () => (
  <StaticQuery
    query={playlistsQuery}
    render={({ playlists, annual }) => {
      return (
        <>
          <h2>Playlists</h2>
          {playlists.edges.map(({ node }) => (
            <Playlist key={node.spotifyId} node={node} />
          ))}

          <h2>Annual</h2>
          {annual.edges.map(({ node }) => (
            <Playlist key={node.spotifyId} node={node} />
          ))}
        </>
      );
    }}
  />
);

export default List;
