export type ThemeType = typeof theme;

const breakpoints = {
  small: 600,
  medium: 900,
};

export const theme = {
  color: {
    light: 'hsl(0, 0%, 97%)',
    dark: 'hsl(0, 0%, 3%)',
    header: 'hsla(0, 0%, 97%, 0.5)',
    headerDark: 'hsla(0, 0%, 3%, 0.7)',
    accent: 'hsl(24, 100%, 50%)',
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
    weight: 400,
    weightBold: 700,
    weightMono: 400,
  },
  spacing: '2rem',
  borderSize: '0.25rem',
  radius: '0.25rem',
};
