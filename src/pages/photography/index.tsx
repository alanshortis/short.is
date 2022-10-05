import type { NextPage } from 'next';
import { Layout, PostFormatting } from '../../components';
import { Full, Grid, PageBody } from '../../components/Grid';

export const config = {
  unstable_runtimeJS: false,
};

const Photography: NextPage = () => (
  <>
    <Layout title="Photography">
      <Grid>
        <Full>
          <h1>Photography</h1>
        </Full>
        <PageBody as={PostFormatting}>
          <p>Well?</p>
        </PageBody>
      </Grid>
    </Layout>
  </>
);

export default Photography;
