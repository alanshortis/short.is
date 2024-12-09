import { type FC } from 'react';
import styles from './PostDate.module.scss';

interface Props {
  date: string;
}

export const PostDate: FC<Props> = ({ date }) => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.toLocaleString('en-GB', { month: 'long' });
  const year = d.getFullYear();

  return (
    <time dateTime={date} className={styles.date}>
      {day} {month} {year}
    </time>
  );
};
