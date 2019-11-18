import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from '..';
import descriptions from './descriptions.json';

const Count = styled.p`
  display: flex;
  justify-content: space-between;
  span:nth-child(2) {
    color: ${p => p.theme.color.accent};
  }
`;

const Playlist = ({ playlist }) => {
  const { external_urls: urls, tracks, name } = playlist;
  const currentYear = new Date().getFullYear().toString();
  return (
    <Grid.ItemContainer>
      <Grid.Item as="a" href={urls.spotify} target="_blank" rel="noopener noreferrer">
        <Count className="smallcaps">
          <span>{tracks.total} tracks</span>
          {currentYear === name && <span>Updated</span>}
        </Count>
        <h2>{name}</h2>
        <p>{descriptions[name.toLowerCase()]}</p>
      </Grid.Item>
    </Grid.ItemContainer>
  );
};

Playlist.propTypes = {
  playlist: PropTypes.shape({
    name: PropTypes.string,
    external_urls: PropTypes.shape({
      spotify: PropTypes.string,
    }),
    tracks: PropTypes.shape({
      total: PropTypes.number,
    }),
  }).isRequired,
};

export default Playlist;
