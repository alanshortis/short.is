import type { FC } from 'react';
import dynamic from 'next/dynamic';
import { dateFormat } from '../helpers';
import { Label } from '.';

const ShareButton = dynamic(() => import('./ShareButton'), {
  ssr: process.env.NODE_ENV === 'production',
});

interface Props {
  date: string;
  prefix?: string;
  hasShare?: boolean;
  hasYear?: boolean;
}

export const PostDate: FC<Props> = ({ date, prefix, hasShare, hasYear }) => (
  <Label>
    {prefix && <span>{prefix} &middot; </span>}
    <time dateTime={date}>{dateFormat(date, hasYear)}</time>
    {hasShare && <ShareButton />}
  </Label>
);
