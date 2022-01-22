import type { FC } from 'react';
import { dateFormat, daysSince } from '../helpers';
import { Label } from '.';

interface Props {
  date: string;
  year?: string;
}

export const PostDate: FC<Props> = ({ date, year }) => (
  <Label as="time" dateTime={date}>
    {dateFormat(date)} {year && year}
    {daysSince(date) < 14 && <span> &middot; New</span>}
  </Label>
);
