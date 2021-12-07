import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { A, Grid, Layout, PostDate, PostFormatting, ShadowBox } from '../components';

const HomeBox = styled(ShadowBox)<{ side?: string }>`
  grid-column: 1 / 3;
  margin-bottom: calc(var(--spacing) / 2);
  padding: var(--spacing);
  @media ${p => p.theme.media.medium} {
    grid-column: ${p => (p.side === 'right' ? '-1 / -9' : '1 / 9')};
  }
`;

export const config = {
  unstable_runtimeJS: false,
};

const Home: NextPage = () => (
  <>
    <Head>
      <link rel="prefetch" href="/writing" />
      <link rel="prefetch" href="/photography" />
    </Head>
    <Layout>
      <Grid>
        <HomeBox>
          <PostFormatting>
            <p className="intro">
              I’m Alan Shortis—a front end developer and occasional photo taker based in <del>London</del>{' '}
              <del>Nottingham</del> <ins>Leicester</ins>.
            </p>
            <p>
              I like building scalable, accessible, and performant design systems and websites using HTML,
              CSS, and JavaScript. The combination of code and design with empathy for end users is what makes
              me want to do this.
            </p>
            <p>
              Find me on{' '}
              <A href="https://codepen.io/alanshortis" rel="me">
                CodePen
              </A>
              ,{' '}
              <A href="https://github.com/alanshortis" rel="me">
                GitHub
              </A>
              ,{' '}
              <A href="https://www.instagram.com/ashortis/" rel="me">
                Instagram
              </A>
              ,{' '}
              <A href="https://www.strava.com/athletes/138800" rel="me">
                Strava
              </A>
              , and{' '}
              <A href="https://twitter.com/alanshortis" rel="me">
                Twitter
              </A>
              .
            </p>
          </PostFormatting>
        </HomeBox>
        <Link href="/writing" passHref>
          <HomeBox as="a" side="right">
            <h2>Some post</h2>
            <PostDate date="2021-12-05" isLatest />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rerum mollitia eos possimus
              nulla quod, exercitationem numquam sunt. Excepturi eum et laudantium assumenda maiores
              distinctio commodi nisi impedit dolorum beatae?
            </p>
          </HomeBox>
        </Link>
      </Grid>
    </Layout>
  </>
);

export default Home;
