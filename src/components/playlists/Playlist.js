import React from 'react';
import PropTypes from 'prop-types';
import parser from 'react-html-parser';

const Playlist = ({ playlists }) => {
  const { nodes } = playlists;
  return (
    <ul>
      {nodes.map(node => {
        const [cover, cover2x] = node.images;
        return (
          <li key={node.spotifyId}>
            <p>{node.name}</p>
            <p>{parser(node.description)}</p>
            <p>{node.tracks.total}</p>
            <img src={cover.url} srcSet={`${cover2x.url} 2x`} alt={`${node.name} cover`} />
          </li>
        );
      })}
    </ul>
  );
};

Playlist.propTypes = {
  playlists: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        spotifyId: PropTypes.string.isRequired,
        name: PropTypes.string,
        description: PropTypes.string,
        images: PropTypes.arrayOf(
          PropTypes.shape({
            width: PropTypes.number,
            height: PropTypes.number,
            url: PropTypes.string,
          })
        ),
      })
    ),
  }).isRequired,
};

export default Playlist;
