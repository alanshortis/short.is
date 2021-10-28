import type { FC } from 'react';
import { Head } from './Head';
import { Header } from './Header';
import { Footer } from './Footer';

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => (
  <>
    <Head title={title} />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
