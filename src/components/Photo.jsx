import React from 'react';
import PropTypes from 'prop-types';
import { Image, Transformation } from 'cloudinary-react';

const Photo = ({ photoId }) => (
  <Image dpr="auto" width="250" publicId={photoId} responsive>
    <Transformation width="250" fetchFormat="auto" crop="scale" />
  </Image>
);

Photo.propTypes = {
  photoId: PropTypes.string.isRequired,
};

export default Photo;
