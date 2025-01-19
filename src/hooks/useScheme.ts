import { useEffect, useLayoutEffect, useState } from 'react';

export const useScheme = () => {
  const SCHEME_MQ = '(prefers-color-scheme: dark)';
  const schemes = ['light', 'auto', 'dark'] as const;
  type Schemes = (typeof schemes)[number];
  const [schemeState, setSchemeState] = useState<Schemes>('auto');
  const [click, setClick] = useState<HTMLAudioElement | null>(null);

  // Set the value of `data-scheme` on the `html` element
  const setSchemeDataset = (scheme: string) => {
    document.documentElement.dataset.scheme = scheme;
  };

  const handlesetScheme = (scheme: Schemes) => {
    setSchemeState(scheme);
    click?.play();
    window.localStorage.setItem('scheme', scheme);
  };

  useLayoutEffect(() => {
    // I'm not smart enough to fix this properly
    const savedScheme = window.localStorage.getItem('scheme') as Schemes;
    setSchemeState(savedScheme || 'auto');
  }, []);

  useEffect(() => {
    setClick(new Audio('/click.mp3'));
    setSchemeDataset(schemeState);

    window.matchMedia(SCHEME_MQ).addEventListener('change', event => {
      if (schemeState === 'auto') {
        setSchemeDataset(event.matches ? 'dark' : 'light');
      }
    });

    return () => {
      window.matchMedia(SCHEME_MQ).removeEventListener('change', () => {});
    };
  }, [schemeState]);

  return {
    schemes,
    scheme: schemeState,
    setScheme: handlesetScheme,
  };
};
