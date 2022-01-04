import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout, PostFormatting } from '../components';
import { Full, Grid, PageBody } from '../components/Grid';

export const config = {
  unstable_runtimeJS: false,
};

const Home: NextPage = () => (
  <>
    <Head>
      <link rel="prefetch" href="/writing" />
      <link rel="prefetch" href="/about" />
    </Head>
    <Layout>
      <Grid>
        <Full>
          <h1>About</h1>
        </Full>
        <PageBody as={PostFormatting}>
          <p>&copy;&larr;&rarr;&uarr;&darr;&middot;↗</p>
        </PageBody>
      </Grid>
    </Layout>
  </>
);

export default Home;
