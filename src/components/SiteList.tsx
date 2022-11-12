import type { FC } from 'react';
import type { WebisteLink } from '../types';

interface Props {
  intro: string;
  items: WebisteLink[];
}

export const SiteList: FC<Props> = ({ intro, items }) => (
  <>
    {intro}{' '}
    {items.map(({ name, url }, idx, arr) => {
      const isLast = idx === arr.length - 1;
      return (
        <span key={url}>
          {isLast && 'and '}
          <a href={url}>{name}</a>
          {!isLast && ', '}
        </span>
      );
    })}
  </>
);
