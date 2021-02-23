import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import DocumentHead from '../components/DocumentHead';
import defaultTheme from '../styles/defaultTheme';
import GlobalStyles from '../styles/GlobalStyles';

const Shortis = ({ Component, pageProps }: AppProps) => {
  const meta = {
    description: 'Alan Shortis is a front end developer',
    title: 'Alan Shortis',
    twitter: '@alanshortis',
    url: 'https://short.is',
    year: new Date().getFullYear(),
  };

  const props = {
    ...pageProps,
    meta,
  };

  return (
    <StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <DocumentHead meta={meta} />
        <GlobalStyles />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...props} />
      </ThemeProvider>
    </StrictMode>
  );
};

export default Shortis;
