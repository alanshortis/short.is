import type { AppProps } from 'next/app';
import '@/styles/global.scss';

const Shortis = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default Shortis;
