import { Fragment } from 'react';
import { A } from '../components';

const LastFm = ({ lastfm }) => {
  const artistCount = lastfm.length;

  return (
    <span>
      Listening to{' '}
      {lastfm.map((artist, idx) => (
        <Fragment key={artist.url}>
          {idx !== 0 && ', '}
          {idx + 1 === artistCount && idx !== 0 && 'and '}
          <A href={artist.url}>{artist.name}</A>
        </Fragment>
      ))}
      .
    </span>
  );
};

export default LastFm;
