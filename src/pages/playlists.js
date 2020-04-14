import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';

const playlists = [
  { name: '99 albums', spotifyID: '7autJTV8V8OZlt7EG03EwM' },
  { name: '2020', spotifyID: '7hSbxdvfTP9N2869hrjXfE' },
];

const Playlists = () => {
  const data = useStaticQuery(
    graphql`
      fragment SpotifyFields on SpotifyPlaylist {
        description
        name
        tracks {
          total
        }
        external_urls {
          spotify
        }
        images {
          height
          url
          width
        }
      }
      query {
        thing: spotifyPlaylist(spotifyId: { eq: "7autJTV8V8OZlt7EG03EwM" }) {
          ...SpotifyFields
        }
        thing2: spotifyPlaylist(spotifyId: { eq: "7hSbxdvfTP9N2869hrjXfE" }) {
          ...SpotifyFields
        }
      }
    `
  );

  return (
    <Layout title="Playlists" pathName="/playlists">
      <p>Playlists</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
};

export default Playlists;
