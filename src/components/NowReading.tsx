import type { FC } from 'react';
import { Book } from '../types';

interface Props {
  nowReading: Book[];
}

export const NowReading: FC<Props> = ({ nowReading }) => {
  return (
    <>
      Reading{' '}
      {nowReading.map(({ url, title, author }, idx, arr) => {
        const isLast = idx === arr.length - 1;
        const oneBook = arr.length === 1;

        return (
          <>
            {isLast && !oneBook && 'and '}
            <span key={url}>
              <a href={url}>{title}</a> by {author}
              {!isLast && !oneBook && ', '}
            </span>
          </>
        );
      })}
    </>
  );
};
