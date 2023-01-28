import type { FC, ReactNode } from 'react';
import { DocumentHead, Header } from '@/components';

interface Props {
  title?: string;
  intro?: string;
  children: ReactNode;
}

export const PageLayout: FC<Props> = ({ title, intro, children }) => (
  <>
    <DocumentHead title={title} intro={intro} />
    <Header />
    <main>{children}</main>
  </>
);
