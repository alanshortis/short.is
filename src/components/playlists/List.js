import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Playlist from './Playlist';
import { Grid } from '..';

const LinkContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  max-width: ${p => p.theme.container};
  padding: 0 var(--margin);
  text-align: right;
  width: 100%;
`;

const List = ({ playlists }) => (
  <>
    <Grid.Container>
      {playlists.nodes.map(playlist => (
        <Playlist key={playlist.spotifyId} playlist={playlist} />
      ))}
    </Grid.Container>
    <LinkContainer>
      <a
        href="https://open.spotify.com/user/overview"
        target="_blank"
        rel="noopener noreferrer"
        className="smallcaps"
      >
        More playlists
      </a>
    </LinkContainer>
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
};

export default List;
