import getGoodreads from '../data/goodreads';
import { Goodreads, Layout } from '../components';
import { PostArticle, PostMeta, PostBody } from '../components/PostLayout';

export async function getStaticProps() {
  return {
    props: {
      goodreads: await getGoodreads(),
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

const About = ({ goodreads, meta }) => (
  <Layout meta={meta} title="About">
    <PostArticle>
      <PostMeta>
        <h1>About</h1>
        <p className="intro">
          I’m Alan Shortis—a front end developer based in Nottingham. I like CSS more than
          JavaScript, design systems more than chaos, and accessibility more than exclusion.
        </p>
      </PostMeta>
      <PostBody>
        <p>
          I specialise in building user interfaces with HTML, CSS, and JavaScript. I have been a
          developer professionally in some capacity for almost 15 years, though I made my first
          websites in the late 90s. They were terrible, even by the standards of Geocities.
        </p>
        <p>
          My preference for front end development was founded in being a design hobbyist who used
          the internet to show off derivative ideas. Across my career I have also worked with
          Classic ASP, .net, PHP, and SQL in my brief time as an analyst, but building accessible
          user interfaces for people is where I have settled.
        </p>
        <p>
          This site uses <A href="https://nextjs.org/">Next.js</A> to generate static HTML,{' '}
          <A href="https://styled-components.com/">styled components</A> to author CSS,{' '}
          <A href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">web components</A>{' '}
          for minimal client JavaScript, and <A href="https://www.netlify.com/">Netlify</A> to
          build, deploy and host.
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
          <A href="https://www.last.fm/user/ashortis" rel="me">
            Last.fm
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
        <h3>Now</h3>
        <ul>
          <li>
            <Goodreads goodreads={goodreads} />
          </li>
          <li>Trying to climb out from under the last year.</li>
        </ul>
        <h3>This site</h3>
        <p>
          short.is uses Next.js to generate static HTML with a 0kb JS bundle, styled components to
          author CSS, web components for minimal client JavaScript, and Netlify to build, deploy and
          host.
        </p>
        <p>
          Much more detail on how this all works can be found in this post: Delivering a Next.js
          site with a 0kb bundle.
        </p>
        <h3>Elsewhere</h3>
        <p>Find me on CodePen, GitHub, Instagram, Last.fm, Strava, and Twitter.</p>
      </PostBody>
    </PostArticle>
  </Layout>
);

export default About;
