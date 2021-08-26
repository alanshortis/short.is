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
          I’m Alan Shortis—a front end developer based in Nottingham. I like CSS more than JavaScript, design
          systems more than chaos, and accessibility more than exclusion.
        </p>
        <p>
          I specialise in building user interfaces with HTML, CSS, and JavaScript. I have been a developer
          professionally in some capacity for almost 15 years, though I made my first websites in the late
          90s. They were terrible, even by the standards of Geocities.
        </p>
        <p>
          My preference for front end development was founded in being a design hobbyist who used the internet
          to show off derivative ideas. Across my career I have also worked with Classic ASP, .net, PHP, and
          SQL in my brief time as an analyst, but building accessible user interfaces for people is where I
          have settled.
        </p>
        <p>
          This site uses <A href="https://nextjs.org/">Next.js</A>,{' '}
          <A href="https://styled-components.com/">styled components</A>, and{' '}
          <A href="https://developer.mozilla.org/en-US/docs/Web/Web_Components">web components</A>.
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
      </PostBody>
    </PostArticle>
  </Layout>
);

export default About;
