import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Playlist from '../components/playlists/Playlist';

const Playlists = () => {
  const data = useStaticQuery(
    graphql`
      fragment SpotifyFields on SpotifyPlaylistConnection {
        nodes {
          spotifyId
          name
          description
          tracks {
            total
          }
          images {
            width
            height
            url
          }
        }
      }
      query {
        playlists: allSpotifyPlaylist(
          sort: { order: ASC, fields: [order] }
          filter: {
            name: {
              in: [
                "99 albums"
                "Drummers"
                "Bassists"
                "Sampled"
                "Covers"
                "Dev"
                "Fat Tuesday"
                "DOOM"
                "Start Your Engines"
              ]
            }
          }
        ) {
          ...SpotifyFields
        }
        annual: allSpotifyPlaylist(
          sort: { order: DESC, fields: [name] }
          filter: {
            name: { in: ["2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "1998"] }
          }
        ) {
          ...SpotifyFields
        }
      }
    `
  );

  const { playlists, annual } = data;

  return (
    <Layout title="Playlists" pathName="/playlists">
      <p>Playlists</p>
      <Playlist playlists={annual} />
      <Playlist playlists={playlists} />
    </Layout>
  );
};

export default Playlists;
