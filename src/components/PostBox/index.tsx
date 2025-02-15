import type { FC } from 'react';
import c from 'classnames';
import Link from 'next/link';
import { PostDate } from '@/components';
import styles from './PostBox.module.scss';

interface Props {
  href: string;
  title: string;
  date: string;
  isFeatured?: boolean;
}

export const PostBox: FC<Props> = ({ href, title, date, isFeatured = false }) => (
  <article className={c(styles.postArticle, { [styles.featured]: isFeatured })}>
    <Link href={href} className={styles.post}>
      <PostDate date={date} />
      <h1>{title}</h1>
    </Link>
  </article>
);
