import React from 'react';
import PropTypes from 'prop-types';

const Playlist = ({ node }) => (
  <a key={node.spotifyId} href={node.external_urls.spotify}>
    <h2>{node.name}</h2>
    <h3>{node.tracks.total}</h3>
    {/* <Img fluid={image.localFile.childImageSharp.fluid} alt="" /> */}
    <img src={node.image.localFile.childImageSharp.fluid.src} alt="" />
  </a>
);

Playlist.propTypes = {
  node: PropTypes.shape({
    spotifyId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tracks: {
      total: PropTypes.number.isRequired,
    },
    external_urls: {
      spotify: PropTypes.string.isRequired,
    },
    image: {
      localFile: {
        childImageSharp: {
          fluid: {
            src: PropTypes.string.isRequired,
          },
        },
      },
    },
  }).isRequired,
};

export default Playlist;
