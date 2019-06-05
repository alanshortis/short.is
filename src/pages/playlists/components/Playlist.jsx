import React from 'react';
import PropTypes from 'prop-types';

const Playlist = ({ node }) => {
  const { name, tracks, images, external_urls: urls } = node;
  const [cover2x, cover] = images;

  return (
    <a href={urls.spotify}>
      <h2>{name}</h2>
      <h3>{tracks.total}</h3>
      <img src={cover.url} srcSet={`${cover2x.url} 2x`} alt={`Cover for ${name} playlist`} />
    </a>
  );
};

Playlist.propTypes = {
  node: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tracks: PropTypes.shape({
      total: PropTypes.number.isRequired,
    }),
    external_urls: PropTypes.shape({
      spotify: PropTypes.string.isRequired,
    }),
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default Playlist;
