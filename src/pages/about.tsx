import type { NextPage, GetStaticPropsResult } from 'next';

import c from 'classnames';
import { Page } from '@/layouts';
import { type LastFmArtist, type GoodreadsBook, getLastfm, getGoodreads } from '@/data';
import { NowReading, RecentMusic } from '@/components';
import layoutStyles from '@/layouts/Page/Page.module.scss';
import contentStyles from '@/components/Markdown/Markdown.module.scss';

interface Props {
  recentMusic: LastFmArtist[];
  nowReading: GoodreadsBook[];
}

// const socials = [
//   { url: 'https://www.are.na/alan-shortis', name: 'Arena' },
//   { url: 'https://codepen.io/alanshortis', name: 'Codepen' },
//   { url: 'https://www.discogs.com/user/alanshortis', name: 'Discogs' },
//   { url: 'https://www.last.fm/user/a_________s', name: 'Last.fm' },
//   { url: 'https://www.setlist.fm/user/alanshortis', name: 'Setlist.fm' },
// ];

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      recentMusic: await getLastfm(),
      nowReading: await getGoodreads(),
    },
  };
}

const About: NextPage<Props> = ({ recentMusic, nowReading }) => (
  <Page title="About">
    <h2 className={layoutStyles.title}>Hello</h2>
    <article className={c(layoutStyles.content, contentStyles.markdown)}>
      <p className={contentStyles.large}>
        I&#39;m Alan Shortis—a front end developer based in <del>London</del> <ins>Nottingham</ins>, currently
        working for <a href="https://monzo.com/">Monzo</a>.
      </p>
      <p>
        I like building scalable, accessible, and performant design systems and websites; the combination of
        code, design, and empathy for end users is what makes me want to do my best work.
      </p>
      <p>
        I am primarily working on internal tooling that helps keep Monzo secure. Outside of work I like
        design, photography, music, and cycling, with my enthusiasum far outweighing my ability.
      </p>
      <h3>Now</h3>
      <ul>
        <li>
          <RecentMusic recentMusic={recentMusic} />
        </li>
        <li>
          <NowReading nowReading={nowReading} />
        </li>
        <li>Watching Six Feet Under</li>
        <li>Still absolutely obsessed with exploring the wilderness of Read Dead Redemption II</li>
        <li>
          Still editing film scans with Negative Lab Pro, for the long-awaited photography section of this
          site
        </li>
        <li>Starting the long process of learning Go, so I can diversify my career</li>
      </ul>
      {/* <h3>Elsewhere</h3>
      <ul>
        {socials.map(({ url, name }) => (
          <li key={url}>
            <a href={url} target="_blank" rel="noreferrer">
              {name}
            </a>
          </li>
        ))}
      </ul> */}
    </article>
  </Page>
);

export default About;

export const config = {
  unstable_runtimeJS: false,
};
