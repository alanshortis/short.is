import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { CloudinaryContext } from 'cloudinary-react';
import Loading from '../../../components/Loading';

const Photo = lazy(() => import('./Photo'));

const List = ({ photos }) => (
  <CloudinaryContext cloudName={process.env.GATSBY_CLOUDINARY_NAME}>
    {photos.map(id => (
      <Suspense key={id} fallback={<Loading />}>
        <Photo photoId={id.toString()} />
      </Suspense>
    ))}
  </CloudinaryContext>
);

List.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default List;
