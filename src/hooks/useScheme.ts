import { useEffect, useLayoutEffect, useState } from 'react';

export const useScheme = () => {
  const schemes = ['light', 'auto', 'dark'] as const;
  type Schemes = (typeof schemes)[number];
  const [schemeState, setSchemeState] = useState<Schemes>('auto');
  const [click, setClick] = useState<HTMLAudioElement | null>(null);

  const setSchemeDataset = (scheme: string) => {
    document.body.dataset.scheme = scheme;
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
