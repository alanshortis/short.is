import type { FC } from 'react';
import styles from './TableOfContents.module.scss';

interface Props {
  content: string;
}

export const TableOfContents: FC<Props> = ({ content }) => {
  const markdownTitles = content.match(/^(#+)\s+(.*)$/gm);

  if (!markdownTitles) {
    return null;
  }

  const tableOfContents = markdownTitles?.map(title => {
    const levelMatch = title.match(/^(#+)/);
    const level = levelMatch ? levelMatch[0].length : 0;
    const text = title.replace(/^(#+)\s+/, '');
    const anchor = text
      .toLowerCase()
      .replace(/\s/g, '-')
      .replace(/[.,?!]/g, '');

    return { level, text, anchor };
  });

  return (
    <nav className={styles.toc}>
      <h2 className={styles.title}>Table of contents</h2>
      <ol>
        {tableOfContents.map(({ level, text, anchor }) => (
          <li key={anchor} className={styles[`level${level}`]}>
            <a href={`#${anchor}`}>{text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
