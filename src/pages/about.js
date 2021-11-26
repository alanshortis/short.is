import Link from 'next/link';
import { A, Layout } from '../components';
import { PostArticle, PostMeta, PostBody } from '../components/PostLayout';

export const config = {
  unstable_runtimeJS: false,
};

const About = () => (
  <Layout title="About" hasFooter>
    <PostArticle>
      <PostMeta>
        <h1>About</h1>
      </PostMeta>
      <PostBody>
        <p className="intro">
          I’m Alan Shortis—a front end developer based in <del>London</del> <del>Nottingham</del>{' '}
          <ins>Leicester</ins>.
        </p>
        <p>
          I specialise in building scalable and accessible design systems and websites using HTML, CSS, and
          JavaScript. I have been a developer professionally in some capacity for almost 15 years working with
          Classic ASP, .net, PHP, and SQL before settling on front end. The combination of code, design, and
          empathy for end users is what I love.
        </p>
        <p>
          This site uses <A href="https://nextjs.org/">Next.js</A>,{' '}
          <A href="https://styled-components.com/">styled components</A>, and{' '}
          <A href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">web components</A>. For some
          more information on using web components with Next.js, read{' '}
          <Link href="/writing/next.js-with-web-components-and-a-0kb-bundle">
            <a>Next.js with web components and a 0kb bundle</a>
          </Link>
          .
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
      </PostBody>
    </PostArticle>
  </Layout>
);

export default About;
