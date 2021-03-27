import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import meta from '../data/meta';
import theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';

const Shortis = ({ Component, pageProps }) => {
  const props = {
    ...pageProps,
    meta,
  };

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...props} />
      </ThemeProvider>
    </StrictMode>
  );
};

export default Shortis;
