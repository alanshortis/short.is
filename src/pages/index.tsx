import type { NextPage, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import type { LatestContent } from '../types';
import { latestPost } from '../data/all-posts';
import { Label, Layout, PostIndexItem, ShadowBox } from '../components';
import { Grid, Full } from '../components/Grid';

export async function getStaticProps(): Promise<GetStaticPropsResult<LatestContent>> {
  return {
    props: {
      latestWriting: latestPost,
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

const Home: NextPage<LatestContent> = ({ latestWriting }) => {
  const { slug, date, title, intro, year } = latestWriting;
  return (
    <>
      <Head>
        <link rel="prefetch" href="/writing" />
        <link rel="prefetch" href={`/writing/${slug}`} />
        <link rel="prefetch" href="/about" />
      </Head>
      <Layout>
        <Grid>
          <Full>
            <h1>Alan Shortis</h1>
          </Full>
          <Full>
            <Label as="h2">
              Front end developer &middot;{' '}
              <Link href="/about">
                <a>About &rarr;</a>
              </Link>
            </Label>
          </Full>
        </Grid>
        <ShadowBox>
          <PostIndexItem slug={slug} date={date} title={title} intro={intro} year={year} />
        </ShadowBox>
      </Layout>
    </>
  );
};

export default Home;
