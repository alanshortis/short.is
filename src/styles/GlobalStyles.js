import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 100%;
    --background: #e1e5ea;
    --color: #222831;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    color: var(--color);
    background: var(--background);
    box-sizing: border-box;
    line-height: 1.75;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
`;

export default GlobalStyles;
