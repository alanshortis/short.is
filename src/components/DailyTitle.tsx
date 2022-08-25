import type { FC } from 'react';
import { Label } from './Label';
import { dateFormat } from '../helpers';

interface Props {
  dailyDate: string;
  dailyTitle: number;
}

export const DailyTitle: FC<Props> = ({ dailyDate, dailyTitle }) => {
  const formattedTitle = dailyTitle.toLocaleString('en-GB');

  return <Label title={dateFormat(dailyDate, true)}>#{formattedTitle}</Label>;
};
