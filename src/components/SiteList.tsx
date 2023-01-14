import type { FC } from 'react';
import { Fragment } from 'react';
import type { WebisteLink } from '../types';

interface Props {
  intro: string;
  items: WebisteLink[];
  isMe?: boolean;
}

export const SiteList: FC<Props> = ({ intro, items, isMe = false }) => (
  <>
    {intro}{' '}
    {items.map(({ name, url }, idx, arr) => {
      const isLast = idx === arr.length - 1;
      return (
        <Fragment key={url}>
          {isLast && 'and '}
          <a href={url} rel={isMe ? 'me' : ''}>
            {name}
          </a>
          {!isLast && ', '}
        </Fragment>
      );
    })}
  </>
);
