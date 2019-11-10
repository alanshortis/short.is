import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Grid } from '../../components';

const PlaylistItem = styled(Grid.Item)`
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${p => p.backgroundImage});
    background-size: 100% 100%;
    filter: blur(100px);
  }
`;

const Meta = styled.div`
  position: relative;
  z-index: 1;
`;

const StyledImage = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: ${p => p.theme.contentMargin};
  background-size: 100% 100%;
  img {
    width: 100%;
    max-width: ${p => `${p.maxImgWidth}px`};
    height: auto;
    box-shadow: 0 0 calc(${p => p.theme.contentMargin} * 2) 0 #000;
  }
`;

const Playlist = ({ playlist }) => {
  const { external_urls: urls, images, tracks, name } = playlist;
  const [largeImage, smallImage] = images;

  return (
    <li>
      <PlaylistItem
        target="_blank"
        as="a"
        href={urls.spotify}
        rel="noopener noreferrer"
        backgroundImage={smallImage.url}
      >
        <StyledImage maxImgWidth={smallImage.width}>
          <img
            src={smallImage.url}
            srcSet={`${largeImage.url} 2x`}
            width={smallImage.width}
            height={smallImage.height}
            alt=""
            loading="lazy"
          />
        </StyledImage>
        <Meta>
          <p className="smallcaps" style={{ zIndex: 1 }}>
            {tracks.total} tracks
          </p>
          <h2>{name}</h2>
          <Button>Listen</Button>
        </Meta>
      </PlaylistItem>
    </li>
  );
};

Playlist.propTypes = {
  playlist: PropTypes.shape({
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
  }).isRequired,
};

export default Playlist;
