import getGoodreads from '../data/goodreads';
import { A, Goodreads, Layout } from '../components';

const About = ({ goodreads, meta }) => {
  return (
    <Layout meta={meta} title="About" withFooter>
      <article>
        <div>
          <h1>About</h1>
        </div>
        <div>
          <p>
            I’m Alan Shortis&mdash;a front end developer based in Nottingham. I like CSS more than
            JavaScript, design systems more than chaos, and accessibility more than exclusion.
          </p>
          <p>
            As a front end developer, I specialise in building user interfaces with HTML and CSS.
            But, it being 2021, I also work extensively in JavaScript, using React on a daily basis
            partnered with GraphQL and Node.
          </p>

          <p>
            I have been a developer professionally in some capacity for more than 10 years, though I
            made my first websites in the late 90s. They were terrible, even by the standards of
            Geocities.
          </p>

          <p>
            My preference for front end development is likely connected to me being a design
            hobbyist who used the internet to show off derivative ideas. Across my career I have
            also worked with Classic ASP, .net, PHP, and SQL in my brief time as an analyst, but
            building accessible user interfaces for people is where I have settled.
          </p>
          <h2>Now</h2>
          <ul>
            <li>
              <Goodreads goodreads={goodreads} />
            </li>
            <li>Learning German</li>
          </ul>
          <h2>This site</h2>
          <p>
            short.is uses Next.js and Styled Components to generate totally static HTML and CSS, web
            components for client JavaScript, and Netlify to build, deploy, and host.
          </p>
          <h2>Elsewhere</h2>
          <p>
            Find me on <A href="https://codepen.io/alanshortis">CodePen</A>,{' '}
            <A href="https://github.com/alanshortis">GitHub</A>,{' '}
            <A href="https://www.instagram.com/ashortis/">Instagram</A>,{' '}
            <A href="https://www.last.fm/user/ashortis">Last.fm</A>, and{' '}
            <A href="https://www.strava.com/athletes/138800">Strava</A>.
          </p>
        </div>
      </article>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      goodreads: await getGoodreads(),
    },
  };
}

export default About;
