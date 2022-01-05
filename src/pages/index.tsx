import type { NextPage, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import type { LatestContent } from '../types';
import { latestPost } from '../data/all-posts';
import { Layout, PostFormatting, PostIndexItem } from '../components';
import { Aside, Full, Grid, PageBody } from '../components/Grid';

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
            <h1>I&#39;m Alan Shortis—a front end developer</h1>
          </Full>
          <PageBody>
            <PostFormatting>
              <h2>Latest writing</h2>
            </PostFormatting>
            <PostIndexItem slug={slug} date={date} title={title} intro={intro} year={year} />
          </PageBody>
        </Grid>
        <Grid>
          <Aside>
            <PostFormatting>
              <h2>Latest writing</h2>
            </PostFormatting>
            <PostIndexItem slug={slug} date={date} title={title} intro={intro} year={year} />
          </Aside>
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
