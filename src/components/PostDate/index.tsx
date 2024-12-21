import { type FC } from 'react';
import styles from './PostDate.module.scss';

interface Props {
  date: string;
}

export const PostDate: FC<Props> = ({ date }) => (
  <time dateTime={date} className={styles.date}>
    {new Date(date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
  </time>
);
