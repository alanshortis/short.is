import type { NextPage, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import type { LatestContent } from '../types';
import { latestPost } from '../data/all-posts';
import { Layout, PostFormatting, PostIndexItem, ShadowBox } from '../components';
import { Grid, Full, PageBody } from '../components/Grid';

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
      </Head>
      <Layout>
        <Grid>
          <Full>
            <h1>Alan Shortis</h1>
          </Full>
          <PageBody as={PostFormatting}>
            <p>
              {
                'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=!@£$%^&*()_+#[]{};\'\\:"|,./<>?—←→↗↑↓'
              }
            </p>
            <h2 className="intro">
              I&#39;m a front end developer based in <del>London</del> <del>Nottingham</del>{' '}
              <ins>Leicester</ins>, currently working for{' '}
              <a href="https://playsportsnetwork.com/">Play Sports Network</a>.
            </h2>
            <p>
              I like building scalable, accessible, and performant design systems and websites using HTML,
              CSS, and JavaScript. The combination of code, design, and empathy for end users is what makes me
              want to do my best work.
            </p>
            <p>
              Find me on{' '}
              <a href="https://www.are.na/alan-shortis" rel="me">
                Are.na
              </a>
              ,{' '}
              <a href="https://codepen.io/alanshortis" rel="me">
                CodePen
              </a>
              ,{' '}
              <a href="https://github.com/alanshortis" rel="me">
                GitHub
              </a>
              , and{' '}
              <a href="https://twitter.com/alanshortis" rel="me">
                Twitter
              </a>
              .
            </p>
          </PageBody>
          <PageBody>
            <ShadowBox>
              <PostIndexItem slug={slug} date={date} title={title} intro={intro} year={year} isLatest />
            </ShadowBox>
          </PageBody>
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
