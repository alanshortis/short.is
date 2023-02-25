import type { NextPage, GetStaticPropsResult } from 'next';
import { PageLayout } from '@/layouts';
import { type LastFmArtist, type GoodreadsBook, getLastfm, getGoodreads } from '@/data';
import { NowReading, RecentMusic } from '@/components';
import layoutStyles from '@/layouts/PageLayout.module.scss';
import contentStyles from '@/components/Markdown/Markdown.module.scss';

interface Props {
  recentMusic: LastFmArtist[];
  nowReading: GoodreadsBook[];
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      recentMusic: await getLastfm(),
      nowReading: await getGoodreads(),
    },
  };
}

const About: NextPage<Props> = ({ recentMusic, nowReading }) => (
  <PageLayout title="About">
    <div className={layoutStyles.title}>
      <h2 className={layoutStyles.day}>Hi</h2>
    </div>
    <article className={`${layoutStyles.mainContent} ${contentStyles.markdown}`}>
      <p className={contentStyles.large}>
        I&#39;m Alan Shortis—a front end developer based in Nottingham, currently working for{' '}
        <a href="https://monzo.com/">Monzo</a>.
      </p>
      <p>
        I like building scalable, accessible, and performant design systems and websites; the combination of
        code, design, and empathy for end users is what makes me want to do my best work.
      </p>
      <h3>Now</h3>
      <ul>
        <li>
          <RecentMusic recentMusic={recentMusic} />
        </li>
        <li>
          <NowReading nowReading={nowReading} />
        </li>
        <li>
          Watching{' '}
          <a href="https://tv.apple.com/gb/show/severance/umc.cmc.1srk2goyh2q2zdxcx605w8vtx">Serverance</a>
        </li>
        <li>
          Still playing <a href="https://www.rockstargames.com/reddeadredemption2/">Red Dead Redemption II</a>
        </li>
        <li>Editing film scans</li>
        <li>Building a photo section for this site</li>
      </ul>
      <h3>This site</h3>
      <p>
        Written in TypeScript using Next.js and CSS Modules, with web components for the minimal client-side
        JavaScript
      </p>
      <p>
        The fonts are Sohne and Sohne Mono from{' '}
        <a href="https://klim.co.nz/retail-fonts/soehne/">Klim Type Foundry</a>.
      </p>
    </article>
  </PageLayout>
);

export default About;

export const config = {
  unstable_runtimeJS: false,
};
