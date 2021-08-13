import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';

const Shortis = ({ Component, pageProps }) => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  </StrictMode>
);

export default Shortis;
