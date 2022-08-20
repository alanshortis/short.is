import type { NextPage } from 'next';
import { Layout, Label } from '../components';
import { Aside, Full, Grid, PageBody, Sticker } from '../components/Grid';

export const config = {
  unstable_runtimeJS: false,
};

const Daily: NextPage = () => (
  <Layout title="Writing">
    <Grid>
      <Full>
        <h1>Daily</h1>
      </Full>
      <Aside>
        <Sticker>
          <Label as="h2">(Daily date)</Label>
        </Sticker>
      </Aside>
      <PageBody as="article">
        <p>Blah blah blah</p>
      </PageBody>
    </Grid>
  </Layout>
);

export default Daily;
