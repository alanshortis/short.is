import type { NextPage } from 'next';
import Head from 'next/head';
import { A, Layout, PostFormatting } from '../components';

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
      <PostFormatting>
        <p className="intro">
          I’m Alan Shortis—a front end developer and occasional photo taker based in <del>London</del>{' '}
          <del>Nottingham</del> <ins>Leicester</ins>.
        </p>
        <p>
          I like building scalable, accessible, and performant design systems and websites using HTML, CSS,
          and JavaScript. The combination of code and design with empathy for end users is what makes me want
          to do this.
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
    </Layout>
  </>
);

export default Home;
