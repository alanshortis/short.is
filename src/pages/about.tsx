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
    <div className={layoutStyles.aside}>
      <h2>Hi</h2>
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
      <p>
        Right now I primarily work on internal tooling that helps keep Monzo secure. Outside of work I like
        design, photography, music, and cycling with enthusiasum far outweighing ability.
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
        <li>
          Editing film scans with <a href="https://www.negativelabpro.com/">Negative Lab Pro</a>
        </li>
        <li>Building a photo section for this site</li>
      </ul>
      <h3>This site</h3>
      <p>
        Over engineered behind the scenes to deliver a bare minimum to visitors. This site is written in
        TypeScript and uses Next.js and CSS Modules. Content is written in markdown and aspects of the Now
        section above are gathered via APIs and scraping at build time. The tiny amount of client JavaScript
        is contained within a single web component.
      </p>
      <p>
        The fonts are Sohne and Epicene, both from <a href="https://klim.co.nz">Klim Type Foundry</a>.
      </p>
    </article>
  </PageLayout>
);

export default About;

export const config = {
  unstable_runtimeJS: false,
};
