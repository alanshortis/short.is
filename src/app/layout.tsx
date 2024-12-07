import { type Metadata } from 'next';
import { type FC } from 'react';
import '../styles/globals.scss';
import { Menu } from '@/components';

export const metadata: Metadata = {
  title: 'Alan Shortis',
  description: 'The Fredo Corleone of web dev',
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="en_GB">
    <body>
      <header>
        <Menu />
      </header>
      <main>{children}</main>
      <footer>Footer</footer>
    </body>
  </html>
);

export default RootLayout;
