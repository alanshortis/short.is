/* eslint-disable react/jsx-props-no-spreading */
import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import DocumentHead from '../components/DocumentHead';
import defaultTheme from '../styles/defaultTheme';

const Shortis = ({ Component, pageProps }: AppProps) => {
  const props = {
    ...pageProps,
    meta: {
      description: 'Alan Shortis is a front end developer',
      title: 'Alan Shortis',
      twitter: '@alanshortis',
      url: 'https://short.is',
      year: new Date().getFullYear(),
    },
  };

  return (
    <StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <DocumentHead {...props} />
        <Component {...props} />
      </ThemeProvider>
    </StrictMode>
  );
};

export default Shortis;
