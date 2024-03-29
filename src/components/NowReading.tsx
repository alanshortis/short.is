import type { FC } from 'react';
import { Fragment } from 'react';
import { GoodreadsBook } from '../data';

interface Props {
  nowReading: GoodreadsBook[];
}

export const NowReading: FC<Props> = ({ nowReading }) => {
  return (
    <>
      Reading{' '}
      {nowReading.map(({ url, title, author }, idx, arr) => {
        const isLast = idx === arr.length - 1;
        const oneBook = arr.length === 1;

        return (
          <Fragment key={url}>
            {isLast && !oneBook && 'and '}
            <a href={url}>{title}</a> by {author}
            {!isLast && !oneBook && ', '}
          </Fragment>
        );
      })}
    </>
  );
};
