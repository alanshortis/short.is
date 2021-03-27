import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    color: ${p => p.theme.color.type};
    background: ${p => p.theme.color.background};
    box-sizing: border-box;
    font-size: 16px;
    line-height: 1.75;
    min-height: 100vh;
  }

  #__next {
    display: grid;
    grid-template-rows: 3rem auto 3rem;
  }

  a {
    color: inherit;
  }
`;

export default GlobalStyles;
