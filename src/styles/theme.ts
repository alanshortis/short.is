export type ThemeType = typeof theme;

const breakpoints = {
  small: 600,
  medium: 900,
};

export const theme = {
  color: {
    light: 'hsl(63, 100%, 97%)',
    dark: 'hsl(63, 0%, 3%)',
    mid: 'hsl(63, 100%, 50%)',
  },
  media: {
    small: `(min-width: ${breakpoints.small}px)`,
    medium: `(min-width: ${breakpoints.medium}px)`,
    shouldAnimate: '(prefers-reduced-motion: no-preference)',
  },
  font: {
    face: 'Inter',
    family: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;',
    familyMono: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    weight: 600,
    weightBold: 800,
    weightMono: 400,
  },
  spacing: '2rem',
  borderSize: '0.25rem',
  radius: '0.25rem',
};
