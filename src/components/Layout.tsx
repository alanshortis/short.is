import type { FC } from 'react';
import { Head } from './Head';

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => (
  <>
    <Head title={title} />
    <header>
      <span>Logo</span>
      <nav>Menu</nav>
    </header>
    <main>{children}</main>
  </>
);
