import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import styles from './Markdown.module.scss';

interface Props {
  children: string;
}

export const Markdown = ({ children }: Props) => (
  // @ts-expect-error
  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className={styles.markdown}>
    {children}
  </ReactMarkdown>
);
