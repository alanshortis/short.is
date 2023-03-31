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
        Right now I primarily work on internal tooling that helps keep Monzo secure. Outside of work I like
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
        <li>Watching Succession and Ted Lasso</li>
        <li>Still playing Red Dead Redemption II</li>
        <li>Editing film scans with Negative Lab Pro</li>
        <li>
          This is a work in progress. I am working on a photo section and eventually I&rsquo;d like to figure
          out what a homepage is for
        </li>
      </ul>
    </article>
  </Page>
);

export default About;

export const config = {
  unstable_runtimeJS: false,
};
