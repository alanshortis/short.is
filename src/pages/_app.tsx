import type { AppProps } from 'next/app';
import { StrictMode } from 'react';

const Shortis = ({ Component, pageProps }: AppProps): JSX.Element => (
  <StrictMode>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </StrictMode>
);

export default Shortis;
