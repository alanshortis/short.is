import type { FC } from 'react';
import styles from './OldPost.module.scss';

export const OldPost: FC = () => (
  <div className={styles.old}>
    <p>This post is more than two years old and may no longer be relevant or accurate</p>
  </div>
);
