import { createGlobalStyle } from 'styled-components';
import atRules from './fonts';

const GlobalStyles = createGlobalStyle`
  ${atRules};

  /* stylelint-disable-next-line selector-max-universal */
  *, *:before, *:after {
    border: 0;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  body {
    background-color: ${p => p.theme.color.backgroundDark};
    box-sizing: border-box;
    color: ${p => p.theme.color.type};
    font-family: ${p => p.theme.font.face}, sans-serif;
    font-weight: ${p => p.theme.font.weight};
    min-height: 100%;
    line-height: 1.5;
  }

  ::selection {
    background-color: ${p => p.theme.color.accent};
    color: ${p => p.theme.color.typeLight};
  }

  strong, b {
    font-weight: ${p => p.theme.font.weightBold};
  }

  em, i {
    font-style: italic;
  }
`;

export default GlobalStyles;
