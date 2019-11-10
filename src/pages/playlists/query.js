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
      query {
        playlists: allSpotifyPlaylist(
          sort: { fields: [order], order: ASC }
          filter: { name: { regex: "/^((?![0-9]{4}).)*$/" } }
        ) {
          ...SpotifyFields
        }
        annual: allSpotifyPlaylist(
          sort: { fields: [name], order: DESC }
          filter: { name: { regex: "/[0-9]{4}/" } }
        ) {
          ...SpotifyFields
        }
      }
    `
  );

export default playlistQuery;
