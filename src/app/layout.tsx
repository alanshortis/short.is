import '@/styles/globals.scss';
import { type Metadata } from 'next';
import { type FC } from 'react';
import { Header, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'Alan Shortis',
  description: 'The Fredo Corleone of web dev',
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="en-GB">
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
