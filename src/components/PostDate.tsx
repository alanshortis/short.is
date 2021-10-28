import type { FC } from 'react';
import { dateFormat, daysSince } from '../helpers';

interface Props {
  date: string;
  updated?: string;
}

export const PostDate: FC<Props> = ({ date, updated }) => (
  <>
    <time dateTime={date}>{dateFormat(date)}</time>
    {daysSince(date) < 28 && <span>New</span>}
    {updated && daysSince(updated) < 28 && <span>Updated</span>}
  </>
);
