import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Playlist = ({ playlist }) => {
  const { external_urls: externalUrls, images, tracks, name } = playlist.node;
  const [largeImage, smallImage] = images;

  return (
    <li>
      <a target="_blank" href={externalUrls.spotify} rel="noopener noreferrer">
        <img
          src={smallImage.url}
          srcSet={`${largeImage.url} 2x`}
          width={smallImage.width}
          height={smallImage.height}
          alt=""
          loading="lazy"
        />
        <h2>{name}</h2>
        <p>{tracks.total}</p>
      </a>
    </li>
  );
};

Playlist.propTypes = {
  playlist: PropTypes.shape({
    node: PropTypes.shape({
      name: PropTypes.string,
      external_urls: PropTypes.shape({
        spotify: PropTypes.string,
      }),
      images: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
          height: PropTypes.number,
          width: PropTypes.number,
        })
      ),
      tracks: PropTypes.shape({
        total: PropTypes.number,
      }),
    }),
  }).isRequired,
};

export default Playlist;
