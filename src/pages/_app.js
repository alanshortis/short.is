import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';
import Global from '../styles/Global';
import theme from '../styles/theme';

const Shortis = ({ Component, pageProps }) => (
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <Component {...pageProps} />
    </ThemeProvider>
  </StrictMode>
);

export default Shortis;
