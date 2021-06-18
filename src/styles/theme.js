const breakpoints = {
  small: 600,
  medium: 800,
};

const theme = {
  color: {
    light: 'hsl(213, 18%, 90%)',
    dark: 'hsl(216, 18%, 16%)',
    accent: 'hsl(0, 63%, 46%)',
    accentDark: 'hsl(0, 63%, 65%)',
    divider: 'hsl(214, 18%, 83%)',
    dividerDark: 'hsl(217, 18%, 23%)',
    secondaryBg: 'hsl(210, 17%, 86%)',
    secondaryBgDark: 'hsl(217, 18%, 20%)',
  },
  gradient: {
    header: 'linear-gradient(hsla(213, 18%, 90%, 1) 0%, hsla(213, 18%, 90%, 0) 100%)',
    headerDark: 'linear-gradient(hsla(216, 18%, 16%, 1) 0%, hsla(216, 18%, 16%, 0) 100%)',
  },
  font: {
    face: 'Inter',
    family: 'Inter, Helvetica, Arial, sans-serif',
    faceMono: 'Plex',
    familyMono: "Plex, 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    weight: 400,
    weightBold: 700,
  },
  media: {
    small: `(min-width: ${breakpoints.small}px)`,
    smallMax: `(max-width: ${breakpoints.small}px)`,
    medium: `(min-width: ${breakpoints.medium}px)`,
    mediumMax: `(max-width: ${breakpoints.medium}px)`,
    shouldAnimate: '(prefers-reduced-motion: no-preference)',
  },
  spacing: '2rem',
  spacingSmall: '1rem',
  headerHeight: '5rem',
  articleWidth: '72rem',
  radius: '0.25rem',
};

export default theme;
