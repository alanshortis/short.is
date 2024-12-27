import type { FC } from 'react';
import Link from 'next/link';
import { PostDate } from '@/components';
import styles from './PostBox.module.scss';

interface Props {
  href: string;
  title: string;
  date: string;
}

export const PostBox: FC<Props> = ({ href, title, date }) => (
  <Link href={href} className={styles.post}>
    <h3>{title}</h3>
    <PostDate date={date} />
  </Link>
);
