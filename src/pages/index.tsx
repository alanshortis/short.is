import type { NextPage, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import type { LatestContent } from '../types';
import { latestWriting } from '../data/writing';
import { selectedDailyPosts } from '../data/daily';
import { Label, Layout, PostFormatting, PostIndexItem, SelectedDailies, ShadowBox } from '../components';
import { Grid, Full, PageBody } from '../components/Grid';

export async function getStaticProps(): Promise<GetStaticPropsResult<LatestContent>> {
  return {
    props: {
      latestWritingPost: latestWriting,
      selectedDailies: await selectedDailyPosts(),
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

const Home: NextPage<LatestContent> = ({ latestWritingPost, selectedDailies }) => {
  const { slug, date, title, intro, year } = latestWritingPost;
  return (
    <>
      <Head>
        <link rel="prefetch" href="/writing" />
        <link rel="prefetch" href="/daily" />
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href={`/writing/${slug}`} />
      </Head>
      <Layout>
        <Grid>
          <Full>
            <h1>Alan Shortis</h1>
          </Full>
          <PageBody as={PostFormatting}>
            <p className="intro">
              I&#39;m a front end developer based in <del>London</del> Nottingham, currently working for{' '}
              <a href="https://monzo.com/">Monzo</a>.
            </p>
          </PageBody>
          <PageBody>
            <ShadowBox>
              <Label as="h2">Latest writing</Label>
              <PostIndexItem slug={slug} date={date} title={title} intro={intro} year={year} isLatest />
              <SelectedDailies selectedDailies={selectedDailies} />
            </ShadowBox>
          </PageBody>
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
