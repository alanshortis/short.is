import type { FC } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { dateFormat } from '../helpers';
import { Label } from '.';

const ShareButton = dynamic(() => import('./ShareButton'), {
  ssr: process.env.NODE_ENV === 'production',
});

const Time = styled.time`
  sup {
    font-size: 0.5em;
  }
`;

interface Props {
  date: string;
  prefix?: string;
  hasShare?: boolean;
  hasYear?: boolean;
}

export const PostDate: FC<Props> = ({ date, prefix, hasShare, hasYear }) => (
  <Label>
    {prefix && <span>{prefix} &middot; </span>}
    <Time dateTime={date} dangerouslySetInnerHTML={{ __html: dateFormat(date, hasYear) }} />
    {hasShare && <ShareButton />}
  </Label>
);
