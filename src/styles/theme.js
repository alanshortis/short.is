const breakpoints = {
  small: 600,
  medium: 800,
};

const theme = {
  color: {
    light: 'hsl(216, 18%, 90%)',
    dark: 'hsl(216, 18%, 15%)',
    secondaryBg: 'hsl(216, 18%, 88%)',
    secondaryBgDark: 'hsl(216, 18%, 17%)',
    divider: 'hsl(216, 18%, 86%)',
    dividerDark: 'hsl(216, 18%, 17%)',
    accent: 'hsl(0, 63%, 45%)',
    accentDark: 'hsl(0, 63%, 65%)',
  },
  gradient: {
    header: 'linear-gradient(hsla(216, 18%, 90%, 1) 0%, hsla(216, 18%, 90%, 0) 100%)',
    headerDark: 'linear-gradient(hsla(216, 18%, 15%, 1) 0%, hsla(216, 18%, 10%, 0) 100%)',
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

// - Footer spacing (env var).
// - Step to minify scripts?
// - Remove lang label.
