import type { AppProps } from 'next/app';
import { StrictMode } from 'react';
import { MetaProvider } from '@/context';
import '@/styles/global.scss';

const Shortis = ({ Component, pageProps }: AppProps) => (
  <StrictMode>
    <MetaProvider>
      <Component {...pageProps} />
    </MetaProvider>
  </StrictMode>
);

export default Shortis;
