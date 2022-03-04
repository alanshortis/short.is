import type { FC } from 'react';
import { dateFormat } from '../helpers';
import { Label } from '.';

interface Props {
  date: string;
  hasYear?: boolean;
}

export const PostDate: FC<Props> = ({ date, hasYear }) => (
  <Label as="time" dateTime={date}>
    {dateFormat(date, hasYear)}
  </Label>
);
