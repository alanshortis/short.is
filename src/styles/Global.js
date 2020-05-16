import { createGlobalStyle } from 'styled-components';
import fontImports from './fontImports';

const GlobalStyles = createGlobalStyle`
  ${fontImports};

  :root {
    --margin: calc(${p => p.theme.contentMargin} * 0.75);
    @media ${p => p.theme.media.smallMin} {
      --margin: ${p => p.theme.contentMargin};
    }
  }

  /* stylelint-disable selector-max-universal */
  *, *:before, *:after {
    border: 0;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  /* stylelint-enable */

  html {
    font-size: 16px;
    height: 100%;
  }

  body {
    background-color: ${p => (p.isDark ? p.theme.color.backgroundDark : p.theme.color.background)};
    box-sizing: border-box;
    color: ${p => (p.isDark ? p.theme.color.typeLight : p.theme.color.type)};
    font-family: ${p => p.theme.font.family};
    font-weight: ${p => p.theme.font.weight};
    line-height: 1.5;
    min-height: 100%;
  }

  ::selection {
    background-color: ${p => p.theme.color.accent};
    color: ${p => p.theme.color.typeLight};
  }

  h1, h2, h3, h4 {
    font-size: 2.074rem;
    line-height: 1.125;
    margin-bottom: var(--margin);
  }

  h2 {
    font-size: 1.728rem;
  }

  h3 {
    font-size: 1.44rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  strong, b {
    font-weight: ${p => p.theme.font.weightBold};
  }

  em, i {
    font-style: italic;
  }

  ul, ol {
    list-style: none;
  }

  .smallcaps {
    color: currentColor;
    font-size: 0.79rem;
    letter-spacing: 3px;
    margin-bottom: calc(var(--margin) / 2);
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export default GlobalStyles;
