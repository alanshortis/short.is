import type { NextPage, GetStaticPropsResult } from 'next';
import { PageLayout } from '@/layouts';
import { type LastFmArtist, type GoodreadsBook, getLastfm, getGoodreads } from '@/data';

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

const Now: NextPage<Props> = ({ recentMusic, nowReading }) => (
  <PageLayout title="Now">
    <h1>NOW!</h1>
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
  </PageLayout>
);

export default Now;
