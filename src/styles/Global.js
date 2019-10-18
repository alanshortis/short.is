import { createGlobalStyle } from 'styled-components';
import fontImports from './fonts';

const GlobalStyles = createGlobalStyle`
  ${fontImports}

  /* stylelint-disable-next-line selector-max-universal */
  *, *:before, *:after {
    border: 0;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 14px;
    height: 100%;
    @media ${p => p.theme.media.smallMin} {
      font-size: 16px;
    }
  }

  body {
    background-color: ${p => (p.isDark ? p.theme.color.backgroundDark : p.theme.color.background)};
    box-sizing: border-box;
    color: ${p => (p.isDark ? p.theme.color.typeLight : p.theme.color.type)};
    font-family: ${p => p.theme.font.face};
    font-weight: ${p => p.theme.font.weight};
    line-height: 1.5;
    min-height: 100%;
  }

  ::selection {
    background-color: ${p => p.theme.color.accent};
    color: ${p => p.theme.color.typeLight};
  }

  h1, h2, h3 {
    font-size: 2.074rem;
    line-height: 1.125;
    margin-bottom: ${p => p.theme.contentMargin};
  }

  h2 {
    font-size: 1.728em;
  }

  h3 {
    font-size: 1.44em;
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
`;

export default GlobalStyles;
