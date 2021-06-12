import { Fragment } from 'react';
import { A } from '../components';

const LastFm = ({ lastFm }) => {
  const artistCount = lastFm.length;

  return (
    <span>
      Listening to{' '}
      {lastFm.map((artist, idx) => (
        <Fragment key={artist.url}>
          {idx !== 0 && ', '}
          {idx + 1 === artistCount && idx !== 0 && 'and '}
          <A href={artist.url}>{artist.name}</A>
        </Fragment>
      ))}
      . (via <A href="https://www.last.fm/user/ashortis">Last.fm</A>.)
    </span>
  );
};

export default LastFm;
