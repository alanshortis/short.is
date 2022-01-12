import type { NextPage } from 'next';
import { Layout, PostFormatting } from '../components';
import { Full, Grid, PageBody } from '../components/Grid';

export const config = {
  unstable_runtimeJS: false,
};

const About: NextPage = () => (
  <>
    <Layout title="About">
      <Grid>
        <Full>
          <h1>About</h1>
        </Full>
        <PageBody as={PostFormatting}>
          <p className="intro">
            I&#39;m Alan Shortis—a front end developer based in <del>London</del> <del>Nottingham</del>{' '}
            <ins>Leicester</ins>.
          </p>
          <p>
            I like building scalable, accessible, and performant design systems and websites using HTML, CSS,
            and JavaScript. The combination of code and design with empathy for end users is a unique
            proposition in software engineering, and I love it.
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
      </Grid>
    </Layout>
  </>
);

export default About;
