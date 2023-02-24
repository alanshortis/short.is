import type { NextPage, GetStaticPropsResult } from 'next';
import { PageLayout } from '@/layouts';
import { type LastFmArtist, type GoodreadsBook, getLastfm, getGoodreads } from '@/data';
import { Markdown } from '@/components';
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
        {recentMusic.map(artist => (
          <li key={artist.url}>
            <a href={artist.url}>{artist.name}</a>
          </li>
        ))}
        {nowReading.map(book => (
          <li key={book.url}>
            <a href={book.url}>{book.title}</a> by {book.author}
          </li>
        ))}
      </ul>
      <h3>Elsewhere</h3>
    </article>
  </PageLayout>
);

export default About;

export const config = {
  unstable_runtimeJS: false,
};
