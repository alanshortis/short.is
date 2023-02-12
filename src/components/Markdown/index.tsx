import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './styles.module.scss';

interface Props {
  children: string;
}

export const Markdown = ({ children }: Props) => (
  <ReactMarkdown remarkPlugins={[remarkGfm]} className={styles.markdown}>
    {children}
  </ReactMarkdown>
);
