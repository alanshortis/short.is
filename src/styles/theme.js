import { rem, complement, transparentize } from 'polished';

const theme = {
  color: {
    accent: 'hsl(0, 63%, 64%)',
    complement: complement('hsl(0, 63%, 64%)'),
    background: 'hsl(0, 0%, 100%)',
    backgroundDark: 'hsl(0, 0%, 10%)',
    type: 'hsl(0, 0%, 10%)',
    typeLight: 'hsl(0, 0%, 100%)',
    header: transparentize(0.3, 'hsl(0, 0%, 100%)'),
    headerDark: transparentize(0.3, 'hsl(0, 0%, 10%)'),
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
  headerHeight: rem('40px'),
  transitionSpeed: '200ms',
  transitionTiming: 'ease',
};

export default theme;
