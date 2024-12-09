import { type Metadata } from 'next';
import { type FC } from 'react';
import '@/styles/globals.scss';

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
      <header>Header</header>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
