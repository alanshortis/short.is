import type { NextPage, GetStaticPropsResult } from 'next';
import { allPhotos } from '../../data/cloudinary';
import { Layout } from '../../components';
import { Full, Grid, PageBody } from '../../components/Grid';
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

const Photography: NextPage<PhotoList> = ({ photos }) => (
  <Layout title="Photography">
    <Grid>
      <Full>
        <h1>Photography</h1>
      </Full>
      <PageBody>
        <pre>{JSON.stringify(photos, undefined, 2)}</pre>
      </PageBody>
    </Grid>
  </Layout>
);

export default Photography;
