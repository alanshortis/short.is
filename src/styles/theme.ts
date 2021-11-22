export type ThemeType = typeof theme;

const breakpoints = {
  small: 600,
  medium: 800,
};

export const theme = {
  color: {
    light: 'hsl(0, 0%, 93%)',
    dark: 'hsl(0, 0%, 13%)',
    accent: '#dd6969',
  },
  media: {
    small: `(min-width: ${breakpoints.small}px)`,
    medium: `(min-width: ${breakpoints.medium}px)`,
    shouldAnimate: '(prefers-reduced-motion: no-preference)',
  },
  font: {
    family: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;',
    familyMono: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    weight: 'normal',
    weightBold: 'bold',
  },
};
