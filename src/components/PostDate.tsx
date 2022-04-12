import type { FC } from 'react';
import dynamic from 'next/dynamic';
import { dateFormat } from '../helpers';
import { Label } from '.';

const ShareButton = dynamic(() => import('./ShareButton'), {
  ssr: process.env.NODE_ENV === 'production',
});

interface Props {
  date: string;
  hasShare?: boolean;
  hasYear?: boolean;
}

export const PostDate: FC<Props> = ({ date, hasShare, hasYear }) => (
  <Label as="time" dateTime={date}>
    {dateFormat(date, hasYear)}
    {hasShare && <ShareButton />}
  </Label>
);
