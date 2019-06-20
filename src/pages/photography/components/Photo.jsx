import React from 'react';
import PropTypes from 'prop-types';
import { Image, Transformation } from 'cloudinary-react';

const Photo = ({ photo }) => (
  <>
    <Image dpr="auto" width="250" publicId={photo.id} responsive>
      <Transformation width="250" fetchFormat="auto" crop="scale" />
    </Image>
    {photo.location} {photo.camera} {photo.film} {photo.year}
  </>
);

Photo.propTypes = {
  photo: PropTypes.shape({
    id: PropTypes.string,
    location: PropTypes.string,
    camera: PropTypes.string,
    film: PropTypes.string,
    year: PropTypes.number,
  }).isRequired,
};

export default Photo;
