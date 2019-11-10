import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Playlist from './Playlist';
import { Grid } from '../../components';

const Title = styled.h1`
  grid-column: 1 / -1;
  margin-bottom: 0;
`;

const List = ({ playlists, playlistTitle }) => (
  <>
    <Grid.Container>
      <Title>{playlistTitle}</Title>z
      {playlists.nodes.map(playlist => (
        <Playlist key={playlist.spotifyId} playlist={playlist} />
      ))}
    </Grid.Container>
  </>
);

List.propTypes = {
  playlists: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        spotifyId: PropTypes.string,
      })
    ),
  }).isRequired,
  playlistTitle: PropTypes.string.isRequired,
};

export default List;
