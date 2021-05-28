import { StrictMode } from 'react';
import meta from '../data/meta';
import GlobalStyles from '../styles/GlobalStyles';

const Shortis = ({ Component, pageProps }) => {
  const props = {
    ...pageProps,
    meta,
  };

  return (
    <StrictMode>
      <GlobalStyles />
      <Component {...props} />
    </StrictMode>
  );
};

export default Shortis;
