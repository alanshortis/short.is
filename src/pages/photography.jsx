import React from 'react';
import { CloudinaryContext } from 'cloudinary-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Photo from '../components/Photo';

const photoIds = [6, 7, 8, 34, 30, 3, 29, 28, 27, 26, 23, 21, 20, 2, 19, 18, 17, 15, 11, 10, 999];

const Photography = () => (
  <Layout>
    <SEO title="Photography" />
    <h1>Photography</h1>
    <CloudinaryContext cloudName={process.env.GATSBY_CLOUDINARY_NAME}>
      {photoIds.map(id => (
        <Photo key={id} photoId={id.toString()} />
      ))}
    </CloudinaryContext>
  </Layout>
);

export default Photography;
