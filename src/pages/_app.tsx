import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import DocumentHead from '../components/DocumentHead';
import defaultTheme from '../styles/defaultTheme';
import meta from '../data/Meta';

const Shortis = ({ Component, pageProps }: AppProps) => {
  const props = {
    ...pageProps,
    meta,
  };

  return (
    <StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <DocumentHead meta={meta} />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...props} />
      </ThemeProvider>
    </StrictMode>
  );
};

export default Shortis;
