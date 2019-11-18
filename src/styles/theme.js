import { rem, complement, transparentize } from 'polished';

const theme = {
  color: {
    accent: 'hsl(0, 63%, 64%)',
    complement: complement('hsl(0, 63%, 64%)'),
    background: 'hsl(0, 0%, 100%)',
    backgroundDark: 'hsl(0, 0%, 10%)',
    type: 'hsl(0, 0%, 20%)',
    typeLight: 'hsl(0, 0%, 100%)',
    scrollTrack: 'hsl(0, 0%, 80%)',
    scrollBar: 'hsl(0, 63%, 80%)',
    syntax: {
      background: 'hsl(0, 0%, 95%)',
      backgroundHighlight: 'hsl(0, 0%, 90%)',
      function: 'hsl(0, 63%, 64%)',
      keyword: 'hsl(203.4, 39.4%, 40.8%)',
      operator: 'hsl(32.5, 45.3%, 41.6%)',
      property: 'hsl(0, 45%, 39.2%)',
      regex: 'hsl(38.6, 100%, 46.7%)',
      selector: 'hsl(136.7, 55.9%, 36.5%)',
      text: 'hsl(0, 0%, 40%)',
    },
    header: (isDark, amount) => {
      const color = isDark ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 100%)';
      return transparentize(amount, color);
    },
  },
  font: {
    family: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    familyMono:
      "Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace;",
    familyCode: '"IBM Plex Mono", mono',
    weight: 400,
    weightBold: 700,
  },
  media: {
    xSmallMin: `(min-width: ${rem('550px')})`,
    smallMin: `(min-width: ${rem('700px')})`,
    mediumMin: `(min-width: ${rem('800px')})`,
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
