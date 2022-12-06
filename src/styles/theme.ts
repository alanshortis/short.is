export type ThemeType = typeof theme;

const breakpoints = {
  small: 600,
  medium: 900,
};

export const theme = {
  color: {
    light: 'hsl(0, 0%, 88%)',
    dark: 'hsl(0, 0%, 2%)',
    header: 'hsla(0, 0%, 88%, 0.5)',
    headerDark: 'hsla(0, 0%, 2%, 0.7)',
    // https://en.wikipedia.org/wiki/International_orange
    accent: 'hsl(3, 88%, 39%)',
    accentDark: 'hsl(19, 100%, 50%)',
    inlineCodeBackground: 'hsla(3, 88%, 39%, 0.25)',
    inlineCodeBackgroundDark: 'hsla(19, 100%, 50%, 0.25)',
  },
  media: {
    small: `(min-width: ${breakpoints.small}px)`,
    medium: `(min-width: ${breakpoints.medium}px)`,
    shouldAnimate: '(prefers-reduced-motion: no-preference)',
  },
  font: {
    face: 'Sohne',
    faceBold: 'Sohne',
    faceMono: 'SohneMono',
    family: 'Sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;',
    familyMono: 'SohneMono, "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    weight: 400,
    weightBold: 700,
    weightMono: 400,
  },
  spacing: '2rem',
  borderSize: '0.25rem',
  radius: '0.25rem',
};
