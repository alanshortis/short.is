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
  font: {
    face: 'Inter',
    family: 'Inter, Helvetica, Arial, sans-serif',
    faceMono: 'Plex',
    familyMono: "Plex, 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    weight: 400,
    weightBold: 700,
  },
  media: {
    small: '(min-width: 600px)',
    medium: '(min-width: 800px)',
    mediumMax: '(max-width: 800px)',
    shouldAnimate: '(prefers-reduced-motion: no-preference)',
  },
  spacing: '2rem',
  spacingSmall: '1.5rem',
  headerHeight: '5rem',
  articleWidth: '72rem',
  radius: '0.25rem',
};

export default theme;
