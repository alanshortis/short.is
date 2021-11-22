const breakpoints = {
  small: 600,
  medium: 800,
};

const theme = {
  color: {
    light: 'hsl(0, 0%, 93%)',
    dark: 'hsl(0, 0%, 13%)',
    secondaryBg: 'hsl(0, 0%, 98%)',
    secondaryBgDark: 'hsl(0, 0%, 18%)',
    accent: 'hsl(0, 63%, 45%)',
    accentDark: 'hsl(0, 63%, 65%)',
    del: 'hsl(0, 0%, 42%)',
    delDark: 'hsl(0, 0%, 54%)',
  },
  font: {
    family: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    familyMono: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    weight: 'normal',
    weightBold: 'bold',
  },
  media: {
    small: `(min-width: ${breakpoints.small}px)`,
    smallMax: `(max-width: ${breakpoints.small}px)`,
    medium: `(min-width: ${breakpoints.medium}px)`,
    mediumMax: `(max-width: ${breakpoints.medium}px)`,
    shouldAnimate: '(prefers-reduced-motion: no-preference)',
  },
  spacing: '2rem',
  spacingMed: '1.5rem',
  spacingSmall: '1rem',
  headerHeight: '5rem',
  articleWidth: '72rem',
  radius: '0.25rem',
};

export default theme;
