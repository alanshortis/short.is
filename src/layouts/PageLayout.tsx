import type { FC, ReactNode } from 'react';

interface Props {
  title?: string;
  children: ReactNode;
}

export const PageLayout: FC<Props> = ({ title = 'whatever', children }) => (
  <>
    <header>Hi {title}</header>
    <main>{children}</main>
  </>
);
