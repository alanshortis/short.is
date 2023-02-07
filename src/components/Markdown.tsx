import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Props {
  children: string;
}

export const Markdown = ({ children }: Props) => (
  <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
);
