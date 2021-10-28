import type { FC } from 'react';
import type { HeadInfo } from '../types/Head';
import { Head, Header, Footer } from '.';

export const Layout: FC<HeadInfo> = ({ children, title, intro }) => (
  <>
    <Head title={title} intro={intro} />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
