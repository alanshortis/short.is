import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { StrictMode } from 'react';
import { MetaProvider } from '@/context';

const Shortis: FC<AppProps> = ({ Component, pageProps }) => (
  <StrictMode>
    <MetaProvider>
      <Component {...pageProps} />
    </MetaProvider>
  </StrictMode>
);

export default Shortis;
