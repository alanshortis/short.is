import { StrictMode } from 'react';
import meta from '../data/meta';

const Shortis = ({ Component, pageProps }) => {
  const props = {
    ...pageProps,
    meta,
  };

  return (
    <StrictMode>
      <Component {...props} />
    </StrictMode>
  );
};

export default Shortis;
