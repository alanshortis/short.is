import { createGlobalStyle } from 'styled-components';
import fontImports from './fontImports';

const GlobalStyles = createGlobalStyle`
  ${fontImports};

  *, *::before, *::after { /* stylelint-disable-line */
    border: 0;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  html {
    height: 100%;
    @media ${p => p.theme.media.shouldAnimate} {
      scroll-behavior: smooth;
    }
  }

  body {
    font-family: ${p => p.theme.font.family};
    font-size: 16px;
    line-height: 1.75;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyles;
