import React from 'react';
import PropTypes from 'prop-types';

const Playlist = ({ node }) => {
  const { name, tracks, images, external_urls: urls } = node;
  return (
    <a href={urls.spotify}>
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
    tracks: PropTypes.shape({
      total: PropTypes.number.isRequired,
    }),
    external_urls: PropTypes.shape({
      spotify: PropTypes.string.isRequired,
    }),
    image: PropTypes.shape({
      localFile: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({
            src: PropTypes.string.isRequired,
          }),
        }),
      }),
    }),
  }).isRequired,
};

export default Playlist;
