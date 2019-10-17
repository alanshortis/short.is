import { rem, complement } from 'polished';

const theme = {
  color: {
    accent: 'hsl(0, 63%, 64%)',
    background: 'hsl(0, 0%, 100%)',
    backgroundDark: 'hsl(0, 0%, 10%)',
    type: 'hsl(0, 0%, 10%)',
    typeLight: 'hsl(0, 0%, 100%)',
  },
  font: {
    face: 'Inter',
    weight: 400,
    weightBold: 700,
  },
  media: {
    xSmallMin: `(min-width: ${rem('500px')})`,
    smallMin: `(min-width: ${rem('700px')})`,
  },
  contentMargin: '1.618rem',
  border: rem('7px'),
  container: '1000px',
  containerNarrow: '500px',
  transitionSpeed: '200ms',
  transitionTiming: 'ease',
};

theme.color.complement = complement(theme.color.accent);

export default theme;
