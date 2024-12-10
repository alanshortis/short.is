import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [schemeState, setSchemeState] = useState(window.localStorage.getItem('scheme') || 'auto');

  useEffect(() => {
    document.body.dataset.scheme = schemeState;
  }, [schemeState]);

  const handlesetScheme = (scheme: string) => {
    setSchemeState(scheme);
    window.localStorage.setItem('scheme', scheme);
  };

  return {
    scheme: schemeState,
    setScheme: handlesetScheme,
  };
};
