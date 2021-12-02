export type ThemeType = typeof theme;

const breakpoints = {
  small: 600,
  medium: 900,
};

export const theme = {
  color: {
    light: 'hsl(63, 100%, 97%)',
    dark: 'hsl(0, 0%, 3%)',
    lessLight: 'hsl(63, 100%, 95%)',
    lessDark: 'hsl(0, 0%, 5%)',
    accent: 'hsl(24, 95%, 59%)',
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
    weight: 'normal',
    weightBold: 'bold',
  },
  spacing: '2rem',
  borderSize: '0.25rem',
  radius: '0.25rem',
};
