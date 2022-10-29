import type { NextPage } from 'next';
import Link from 'next/link';
import { Layout, PostFormatting } from '../components';
import { Full, Grid, PageBody } from '../components/Grid';

export const config = {
  unstable_runtimeJS: false,
};

const NotFound: NextPage = () => (
  <>
    <Layout title="404">
      <Grid>
        <Full>
          <h1>404</h1>
        </Full>
        <PageBody as={PostFormatting}>
          <p className="intro">Whatever you&#39;re looking for is not here.</p>
          <p>
            <Link href="/">short.is</Link> used to be a domain shortening service, so there is a good chance
            you followed a link with the hope of seeing something cool. This probably isn&#39;t it.
          </p>
        </PageBody>
      </Grid>
    </Layout>
  </>
);

export default NotFound;
