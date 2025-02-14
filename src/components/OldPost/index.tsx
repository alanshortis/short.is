import type { FC } from 'react';
import styles from './OldPost.module.scss';

interface Props {
  postDate: string;
}

export const OldPost: FC<Props> = ({ postDate }) => {
  const postAgeYears = Math.ceil(
    (new Date(postDate).getTime() - new Date().getTime()) / (365 * 24 * 60 * 60 * 1000)
  );

  return postAgeYears <= -2 ? (
    <div className={styles.old}>
      <p>This post is more than {Math.abs(postAgeYears)} years old</p>
    </div>
  ) : null;
};
