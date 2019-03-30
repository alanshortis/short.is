import React from 'react';
import PropTypes from 'prop-types';

const Playlist = ({ node }) => {
  const { spotifyId, name, tracks, images, external_urls: urls } = node;
  return (
    <a key={spotifyId} href={urls.spotify}>
      <h2>{name}</h2>
      <h3>{tracks.total}</h3>
      <img src={images[1].url} srcSet={`${images[0].url} 2x`} alt="" />
    </a>
  );
};

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
