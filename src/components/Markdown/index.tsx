import { type FC } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Markdown.module.scss';
import { Link } from './renderers/Link';

interface Props {
  content: string;
}

export const Markdown: FC<Props> = ({ content }) => {
  const components = {
    a: Link,
  };

  return (
    <ReactMarkdown className={styles.markdown} components={components}>
      {content}
    </ReactMarkdown>
  );
};
