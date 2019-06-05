import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    background-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.type};
  }
`;

export default GlobalStyles;
