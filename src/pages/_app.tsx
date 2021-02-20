import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import DocumentHead from '../components/DocumentHead';
import defaultTheme from '../styles/defaultTheme';

const Shortis = ({ Component, pageProps }: AppProps) => (
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <DocumentHead />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  </StrictMode>
);

export default Shortis;
