import type { FC } from 'react';

interface Props {
  href: string;
  rel?: string;
}

export const A: FC<Props> = ({ children, href, rel }) => (
  <a href={href} target="_blank" rel={`noopener noreferrer ${rel}`}>
    {children}
  </a>
);
