import React from 'react';
import { Image, CloudinaryContext } from 'cloudinary-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Photography = () => (
  <Layout>
    <SEO title="Photography" />
    <h1>Photography</h1>
    <CloudinaryContext cloudName={process.env.GATSBY_CLOUDINARY_NAME}>
      <Image cloudName={process.env.GATSBY_CLOUDINARY_NAME} publicId="sample" width="200" />
    </CloudinaryContext>
  </Layout>
);

export default Photography;
