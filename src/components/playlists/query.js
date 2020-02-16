import { useStaticQuery, graphql } from 'gatsby';

const playlistQuery = () =>
  useStaticQuery(
    graphql`
      fragment SpotifyFields on SpotifyPlaylistConnection {
        nodes {
          spotifyId
          name
          external_urls {
            spotify
          }
          tracks {
            total
          }
        }
      }
      query {
        playlists: allSpotifyPlaylist(
          sort: { order: ASC, fields: [order] }
          filter: { name: { regex: "/^((?![0-9]{4}).)*$/" } }
          limit: 3
        ) {
          ...SpotifyFields
        }
        annual: allSpotifyPlaylist(
          sort: { order: DESC, fields: [name] }
          filter: { name: { regex: "/[0-9]{4}/" } }
          limit: 3
        ) {
          ...SpotifyFields
        }
      }
    `
  );

export default playlistQuery;
