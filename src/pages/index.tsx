import type { NextPage } from 'next';
import Head from 'next/head';
import { Full } from '@/layouts';
import styles from './index.module.scss';

const Home: NextPage = () => (
  <>
    <Head>
      <link rel="prefetch" href="/daily" />
      <link rel="prefetch" href="/about" />
    </Head>
    <Full className={styles.home}>
      <h1 className="hidden">Alan Shortis</h1>
      <div className={styles.orb} />
    </Full>
  </>
);

export default Home;

export const config = {
  unstable_runtimeJS: false,
};
