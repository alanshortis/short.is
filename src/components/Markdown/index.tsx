import { type FC } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Markdown.module.scss';

interface Props {
  content: string;
}

export const Markdown: FC<Props> = ({ content }) => (
  <ReactMarkdown className={styles.markdown}>{content}</ReactMarkdown>
);
