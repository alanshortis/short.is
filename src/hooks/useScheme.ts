import { useEffect, useLayoutEffect, useState } from 'react';

export const useScheme = () => {
  const SCHEME_MQ = '(prefers-color-scheme: dark)';
  const schemes = ['light', 'auto', 'dark'] as const;
  type Schemes = (typeof schemes)[number];
  const [schemeState, setSchemeState] = useState<Schemes>('auto');

  const setSchemeDataset = (scheme: string) => {
    if (scheme === 'auto') {
      document.documentElement.dataset.scheme = window.matchMedia(SCHEME_MQ).matches ? 'dark' : 'light';
    } else {
      document.documentElement.dataset.scheme = scheme;
    }
  };

  const handlesetScheme = (scheme: Schemes) => {
    setSchemeState(scheme);
    window.localStorage.setItem('scheme', scheme);
  };

  useLayoutEffect(() => {
    const savedScheme = window.localStorage.getItem('scheme') as Schemes;
    setSchemeState(savedScheme || 'auto');
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    setSchemeDataset(schemeState);

    window.matchMedia(SCHEME_MQ).addEventListener(
      'change',
      event => {
        if (schemeState === 'auto') {
          setSchemeDataset(event.matches ? 'dark' : 'light');
        }
      },
      {
        signal: controller.signal,
      }
    );

    return () => {
      controller.abort();
    };
  }, [schemeState]);

  return {
    schemes,
    scheme: schemeState,
    setScheme: handlesetScheme,
  };
};
