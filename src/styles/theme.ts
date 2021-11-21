export type ThemeType = typeof theme;

export const theme = {
  color: {
    light: 'hsl(0, 0%, 93%)',
    dark: 'hsl(0, 0%, 13%)',
    accent: '#dd6969',
  },
  media: {
    shouldAnimate: '(prefers-reduced-motion: no-preference)',
  },
};
