import { useState, useEffect } from 'react';

const schemes = ['light', 'auto', 'dark'];
const MEDIA_QUERY = window.matchMedia('(prefers-color-scheme: dark)');

export const useTheme = () => {
  const [schemeState, setSchemeState] = useState<(typeof schemes)[number]>(
    window.localStorage.getItem('scheme') || 'auto'
  );

  const setSchemeDataset = (scheme: string) => {
    document.body.dataset.scheme = scheme;
  };

  useEffect(() => {
    setSchemeDataset(schemeState);

    MEDIA_QUERY.addEventListener('change', event => {
      if (schemeState === 'auto') {
        setSchemeDataset(event.matches ? 'dark' : 'light');
      }
    });

    return () => {
      MEDIA_QUERY.removeEventListener('change', () => {});
    };
  }, [schemeState]);

  const handlesetScheme = (scheme: string) => {
    setSchemeState(scheme);
    window.localStorage.setItem('scheme', scheme);
  };

  return {
    schemes,
    scheme: schemeState,
    setScheme: handlesetScheme,
  };
};
