import type { NextPage } from 'next';
import Link from 'next/link';
import { A, Grid, Layout } from '../components';
import { PostBody, PostMeta } from '../components/PostLayout';

export const config = {
  unstable_runtimeJS: false,
};

const About: NextPage = () => (
  <>
    <Layout title="About">
      <Grid>
        <PostMeta>
          <h1>About</h1>
        </PostMeta>
        <PostBody>
          <p className="intro">
            I&#39;m Alan Shortis—a front end developer and occasional photo taker based in <del>London</del>{' '}
            <del>Nottingham</del> <ins>Leicester</ins>.
          </p>
          <p>
            I like building scalable, accessible, and performant design systems and websites using HTML, CSS,
            and JavaScript. The combination of code and design with empathy for end users is a unique
            proposition in software engineering, and I love it. I try and{' '}
            <Link href="/writing">
              <a>write</a>
            </Link>{' '}
            about problems I have overcome and some more abstract observations and thoughts.
          </p>
          <p>
            I was heavily into{' '}
            <Link href="/photography">
              <a>photography</a>
            </Link>{' '}
            during the late 2010s, coming back to it in 2021 after a long hiatus. While trying to come to
            terms with the rise in cost of film over the last ten years, I&#39;m working on getting some newer
            pieces shot and shared soon. I don&#39;t know what I&#39;m looking for, but I&#39;ll know it when
            I see it.
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
            , and{' '}
            <A href="https://twitter.com/alanshortis" rel="me">
              Twitter
            </A>
            .
          </p>
        </PostBody>
      </Grid>
    </Layout>
  </>
);

export default About;
