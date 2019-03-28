import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';

const playlistsQuery = graphql`
  {
    allSpotifyPlaylist {
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
  }
`;

const PlaylistList = () => (
  <StaticQuery
    query={playlistsQuery}
    render={({ allSpotifyPlaylist }) =>
      allSpotifyPlaylist.edges.map(({ node }) => {
        const { spotifyId, name, image } = node;
        const { total } = node.tracks;
        return (
          <a key={spotifyId} href={node.external_urls.spotify}>
            <h2>{name}</h2>
            <h3>{total}</h3>
            {/* <Img fluid={image.localFile.childImageSharp.fluid} alt="" /> */}
            <img src={image.localFile.childImageSharp.fluid.src} alt="" />
          </a>
        );
      })
    }
  />
);

export default PlaylistList;
