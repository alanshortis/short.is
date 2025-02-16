import type { FC } from 'react';
import { readingList } from '@/lib';
import styles from './ReadingList.module.scss';

export const ReadingList: FC = () => (
  <div className={styles.list}>
    <div className={styles.sectionHeader}>
      <h2>Reading</h2>
      <p>Things of note I have recently read, seen, or heard</p>
    </div>
    <div className={styles.linkList}>
      {readingList.map(({ url, title, author, type }) => (
        <article key={url}>
          <a href={url} className={styles.link} target="_blank" rel="noopener noreferrer">
            <p className={styles.type}>{type}</p>
            <h1>{title}</h1>
            <p className={styles.author}>
              <i>by</i> {author}
            </p>
          </a>
        </article>
      ))}
      <div className={styles.shadow}> </div>
    </div>
  </div>
);
