import React, { Suspense, lazy } from 'react';
import { CloudinaryContext } from 'cloudinary-react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import Loading from '../../components/Loading';

const Photo = lazy(() => import('./components/Photo'));

const photoIds = [6, 7, 8, 34, 30, 3, 29, 28, 27, 26, 23, 21, 20, 2, 19, 18, 17, 15, 11, 10, 999];

const Photography = () => (
  <Layout>
    <SEO title="Photography" />
    <h1>Photography</h1>
    <CloudinaryContext cloudName={process.env.GATSBY_CLOUDINARY_NAME}>
      {photoIds.map(id => (
        <Suspense key={id} fallback={<Loading />}>
          <Photo photoId={id.toString()} />
        </Suspense>
      ))}
    </CloudinaryContext>
  </Layout>
);

export default Photography;
