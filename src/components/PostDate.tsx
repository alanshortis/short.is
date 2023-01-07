import type { FC } from 'react';
import dynamic from 'next/dynamic';
import { Label } from '.';

const ShareButton = dynamic(() => import('./ShareButton'), {
  ssr: process.env.NODE_ENV === 'production',
});

interface Props {
  date: string;
  hasShare?: boolean;
  hasYear?: boolean;
}

export const PostDate: FC<Props> = ({ date, hasShare, hasYear }) => {
  const d = new Date(date);
  const day = d.getDate().toString();
  const month = d.toLocaleString('en-GB', { month: 'long' });
  const year = hasYear ? d.getFullYear() : '';

  return (
    <Label>
      <time dateTime={date}>
        {day} {month} {year}
      </time>
      {hasShare && <ShareButton />}
    </Label>
  );
};
