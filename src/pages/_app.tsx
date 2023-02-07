import type { AppProps } from 'next/app';
import { MetaProvider } from '@/context';
import '@/styles/global.scss';

const Shortis = ({ Component, pageProps }: AppProps) => (
  <MetaProvider>
    <Component {...pageProps} />
  </MetaProvider>
);

export default Shortis;
