import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import atRules from './fonts';

const GlobalStyles = createGlobalStyle`
  ${atRules};
  ${normalize()};

  html {
    height: 100%;
  }

  body {
    background-color: ${p => p.theme.color.background};
    color: ${p => p.theme.color.type};
    font-family: ${p => p.theme.font.face}, sans-serif;
    font-size: ${p => p.theme.font.baseSize};
    font-weight: ${p => p.theme.font.weight};
    min-height: 100%;
  }

  strong, b {
    font-weight: ${p => p.theme.font.weightBold};
  }

  em, i {
    font-style: italic;
  }
`;

export default GlobalStyles;
