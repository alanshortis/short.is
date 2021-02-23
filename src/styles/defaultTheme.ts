export type Theme = typeof defaultTheme;

const defaultTheme = {
  font: {
    face: 'Inter',
    family: 'Inter, Helvetica, Arial, sans-serif',
    faceMono: 'Plex',
    familyMono: "Plex, 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    weight: 400,
    weightBold: 700,
  },
  media: {
    shouldAnimate: '(prefers-reduced-motion: no-preference)',
  },
  color: {
    type: '#f00',
  },
};

export default defaultTheme;
