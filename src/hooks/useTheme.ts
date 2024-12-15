import { useState, useEffect, useLayoutEffect } from 'react';

export const useTheme = () => {
  const schemes = ['light', 'auto', 'dark'];
  const [schemeState, setSchemeState] = useState<(typeof schemes)[number]>('auto');

  const setSchemeDataset = (scheme: string) => {
    document.body.dataset.scheme = scheme;
  };

  const handlesetScheme = (scheme: string) => {
    setSchemeState(scheme);
    window.localStorage.setItem('scheme', scheme);
  };

  useLayoutEffect(() => {
    setSchemeState(window.localStorage.getItem('scheme') || 'auto');
  }, []);

  useEffect(() => {
    setSchemeDataset(schemeState);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      if (schemeState === 'auto') {
        setSchemeDataset(event.matches ? 'dark' : 'light');
      }
    });

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
    };
  }, [schemeState]);

  return {
    schemes,
    scheme: schemeState,
    setScheme: handlesetScheme,
  };
};
