import React from 'react';
import PropTypes from 'prop-types';
import Playlist from './Playlist';
import { Grid } from '../../components';

const List = ({ playlists }) => (
  <Grid.Container>
    {playlists.nodes.map(playlist => (
      <Playlist key={playlist.spotifyId} playlist={playlist} />
    ))}
  </Grid.Container>
);

List.propTypes = {
  playlists: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        spotifyId: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default List;
