import { type FC } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import styles from './Markdown.module.scss';
import { Link, CodeBlock } from './renderers';

interface Props {
  content: string;
}

export const Markdown: FC<Props> = ({ content }) => {
  const components = {
    a: Link,
    pre: CodeBlock,
  };

  return (
    <ReactMarkdown
      className={styles.markdown}
      components={components}
      rehypePlugins={[rehypeRaw, rehypeSlug]}
    >
      {content}
    </ReactMarkdown>
  );
};
