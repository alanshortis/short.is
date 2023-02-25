import type { FC } from 'react';
import { Fragment } from 'react';
import type { LastFmArtist } from '../data';

interface Props {
  recentMusic: LastFmArtist[];
}

export const RecentMusic: FC<Props> = ({ recentMusic }) => (
  <>
    Listening to{' '}
    {recentMusic.map(({ name, url }, idx, arr) => {
      const isLast = idx === arr.length - 1;
      return (
        <Fragment key={url}>
          {isLast && 'and '}
          <a href={url}>{name}</a>
          {!isLast && ', '}
        </Fragment>
      );
    })}
  </>
);
