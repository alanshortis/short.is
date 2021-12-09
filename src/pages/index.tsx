import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components';

export const config = {
  unstable_runtimeJS: false,
};

const Home: NextPage = () => (
  <>
    <Head>
      <link rel="prefetch" href="/writing" />
      <link rel="prefetch" href="/photography" />
    </Head>
    <Layout />
  </>
);

export default Home;
