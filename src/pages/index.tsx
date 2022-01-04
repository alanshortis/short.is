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
      <link rel="prefetch" href="/about" />
    </Head>
    <Layout>
      <p>
        {'abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ0123456789,./<>?`~[];\'\\:"|!@£$%^&*()—-_=+{}§±'}
        &copy;&larr;&rarr;&uarr;&darr;&middot;↗
      </p>
    </Layout>
  </>
);

export default Home;
