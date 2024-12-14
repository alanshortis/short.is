import type { ReactNode, FC } from 'react';

interface Props {
  href: string;
  children: ReactNode;
}

export const Link: FC<Props> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);
