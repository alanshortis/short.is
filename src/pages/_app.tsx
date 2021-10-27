import type { AppProps } from 'next/app';
import type { FC } from 'react';
import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import { Global } from '../styles/Global';
import { theme } from '../styles/theme';

const Shortis: FC<AppProps> = ({ Component, pageProps }) => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  </StrictMode>
);

export default Shortis;
