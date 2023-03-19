import type { NextPage, GetStaticProps } from 'next';
import { type DailyPost, getDailyPosts } from '@/data';
import Head from 'next/head';
import { Full } from '@/layouts';
import { Footer } from '@/components';
import Link from 'next/link';
import styles from './index.module.scss';

interface Props {
  latestPost: DailyPost;
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const [latestPost] = getDailyPosts(0, 1);

  return {
    props: { latestPost },
  };
};

const Home: NextPage<Props> = ({ latestPost }) => (
  <>
    <Head>
      <link rel="prefetch" href="/daily" />
      <link rel="prefetch" href="/about" />
    </Head>
    <Full className={styles.home}>
      <h1>
        <span className={styles.serif}>Alan Shortis</span>
      </h1>
      <p>
        <Link href="/about">About &rarr;</Link> <Link href="/daily">Daily &rarr;</Link>{' '}
      </p>
      <p>
        <span className={styles.serif}>{latestPost.day}</span>{' '}
        <Link href="/daily">{latestPost.title} &rarr;</Link>
      </p>
    </Full>
    <Footer />
  </>
);

export default Home;

export const config = {
  unstable_runtimeJS: false,
};
