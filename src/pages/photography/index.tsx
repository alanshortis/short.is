import type { NextPage, GetStaticPropsResult } from 'next';
import { allPhotos } from '../../data/cloudinary';
import { Layout } from '../../components';
import type { PhotoList } from '../../types';

export async function getStaticProps(): Promise<GetStaticPropsResult<PhotoList>> {
  return {
    props: {
      photos: await allPhotos('photography'),
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

interface Props {
  photos: PhotoList;
}

const Photography: NextPage<Props> = ({ photos }) => (
  <Layout title="Photography">
    <h1>Photography</h1>
    <pre>{JSON.stringify(photos, undefined, 2)}</pre>
  </Layout>
);

export default Photography;
