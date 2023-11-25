import type { NextPage, GetStaticProps } from 'next';
import { type DailyPost, getDailyPosts } from '@/data';
import Head from 'next/head';
import { Full } from '@/layouts';
import { Footer } from '@/components';

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
      <link rel="prefetch" href="/photography" />
    </Head>
    <Full>
      <h1>Alan Shortis</h1>
    </Full>
    <Footer />
  </>
);

export default Home;

export const config = {
  unstable_runtimeJS: false,
};
