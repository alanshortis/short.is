import { type FC } from 'react';
import styles from './PostDate.module.scss';

interface Props {
  date: string;
}

export const PostDate: FC<Props> = ({ date }) => (
  <time dateTime={date} className={styles.date}>
    {date.replaceAll('-', ':')}
  </time>
);
