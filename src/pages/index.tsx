import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components';

export const config = {
  unstable_runtimeJS: false,
};

const str =
  '\'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789,.?!@£$#€%^&*()-_—+={}[]<>~``""\\/|;:→←↑↗';

const Home: NextPage = () => (
  <>
    <Head>
      <link rel="prefetch" href="/about" />
      <link rel="prefetch" href="/writing" />
      <link rel="prefetch" href="/photography" />
    </Head>
    <Layout>
      <h1>Home</h1>
      <p>{str}</p>
    </Layout>
  </>
);

export default Home;
