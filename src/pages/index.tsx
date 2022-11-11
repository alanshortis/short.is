import type { NextPage, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import type { LatestContent } from '../types';
import { latestWriting } from '../data/writing';
import { Arrow, Layout, PostFormatting, PostIndexItem, ShadowBox } from '../components';
import { Grid, Full, PageBody } from '../components/Grid';

const StyledLink = styled.a`
  display: inline-block;
  margin-left: calc(var(--spacing) / 2);
  && {
    color: var(--foreground);
  }
`;

export async function getStaticProps(): Promise<GetStaticPropsResult<LatestContent>> {
  return {
    props: {
      latestWritingPost: latestWriting,
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

const Home: NextPage<LatestContent> = ({ latestWritingPost }) => {
  const { slug, date, title, intro, year } = latestWritingPost;
  return (
    <>
      <Head>
        <link rel="prefetch" href="/writing" />
        <link rel="prefetch" href="/daily" />
        <link rel="prefetch" href={`/writing/${slug}`} />
      </Head>
      <Layout>
        <Grid>
          <Full>
            <h1>Alan Shortis</h1>
          </Full>
          <PageBody as={PostFormatting}>
            <h2 className="intro">
              I&#39;m a front end developer based in <del>London</del> Nottingham, working for{' '}
              <a href="https://monzo.com/">Monzo</a>.
              <Link href="/about" passHref>
                <StyledLink>
                  <Arrow>Tell me more</Arrow>
                </StyledLink>
              </Link>
            </h2>
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
