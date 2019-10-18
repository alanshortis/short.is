import { rem, complement, transparentize } from 'polished';

const theme = {
  color: {
    accent: 'hsl(0, 63%, 64%)',
    complement: complement('hsl(0, 63%, 64%)'),
    background: 'hsl(0, 0%, 100%)',
    backgroundDark: 'hsl(0, 0%, 10%)',
    type: 'hsl(0, 0%, 10%)',
    typeLight: 'hsl(0, 0%, 100%)',
    header: (isDark, amount) => {
      const color = isDark ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 100%)';
      return transparentize(amount, color);
    },
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
  container: rem('1000px'),
  containerNarrow: rem('500px'),
  headerHeight: '5rem',
  transitionSpeed: '200ms',
  transitionTiming: 'ease',
};

export default theme;
