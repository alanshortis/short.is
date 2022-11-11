import type { NextPage, GetStaticPropsResult } from 'next';
import type { AboutData } from '../types';
import { Layout, PostFormatting } from '../components';
import { Full, Grid, PageBody } from '../components/Grid';
import { googleBooks } from '../data/google-books';
import { lastfm } from '../data/lastfm';

export async function getStaticProps(): Promise<GetStaticPropsResult<AboutData>> {
  return {
    props: {
      nowReading: await googleBooks(),
      recentMusic: await lastfm(),
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

const About: NextPage<AboutData> = ({ nowReading, recentMusic }) => (
  <>
    <Layout title="About">
      <Grid>
        <Full>
          <h1>About</h1>
        </Full>
        <PageBody as={PostFormatting}>
          <h2 className="intro">Building for the web with HTML, CSS, and JavaScript. In that order.</h2>
          <p>
            I&#39;m Alan Shortis, a front end developer based in <del>London</del> Nottingham currently
            working for <a href="https://monzo.com/">Monzo</a>. I like building scalable, accessible, and
            performant design systems and websites; the combination of code, design, and empathy for end users
            is what makes me want to do my best work.
          </p>
          <p>Find me on Twitter, Strava, Arena, CodePen, and LinkedIn.</p>
          <h3>Now</h3>
          <ul>
            <li>
              Reading <a href={nowReading.url}>{nowReading.title}</a> by {nowReading.author}
            </li>
            <li>
              Listening to{' '}
              {recentMusic.map(({ name, url }, i, arr) => {
                const isLast = i === arr.length - 1;
                return (
                  <span key={url}>
                    {isLast && 'and '}
                    <a href={url}>{name}</a>
                    {!isLast && ', '}
                  </span>
                );
              })}
            </li>
            <li>Exploring the wilderness in Red Dead Redemption II</li>
            <li>
              Learning <a href="https://go.dev/">Go</a>, and thinking of learning{' '}
              <a href="https://en.wikipedia.org/wiki/Go_(game)">Go</a>
            </li>
            <li>
              Following a reasonably regimented plan on <a href="https://www.trainerroad.com/">TrainerRoad</a>{' '}
              to enable my daydreams of Italian roads
            </li>
          </ul>
          <h3>This site</h3>
          <p>
            <code>short.is</code> is written in TypeScript using <a href="https://nextjs.org/">Next.js</a> and{' '}
            <a href="https://styled-components.com/">Styled Components</a>. The usual client-side bundle
            containing React is omited, with any interactivity delivered via Web Components. This gives me the
            nice DX, and you the bare minimum of bytes.
          </p>
          <p>
            The fonts are Sohne and Sohne Mono from{' '}
            <a href="https://klim.co.nz/retail-fonts/soehne/">Klim Type Foundry</a>.
          </p>
        </PageBody>
      </Grid>
    </Layout>
  </>
);

export default About;
