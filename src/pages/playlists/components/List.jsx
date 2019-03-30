import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
import Playlist from './Playlist';

const playlistsQuery = graphql`
  fragment SpotifyFields on SpotifyPlaylistConnection {
    edges {
      node {
        spotifyId
        name
        external_urls {
          spotify
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400) {
                src
              }
            }
          }
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
            <Playlist node={node} />
          ))}

          <h2>Annual</h2>
          {annual.edges.map(({ node }) => (
            <Playlist node={node} />
          ))}
        </>
      );
    }}
  />
);

export default List;
