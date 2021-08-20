const breakpoints = {
  small: 600,
  medium: 800,
};

const theme = {
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
    medium: `(min-width: ${breakpoints.medium}px)`,
    shouldAnimate: '(prefers-reduced-motion: no-preference)',
  },
};

export default theme;
