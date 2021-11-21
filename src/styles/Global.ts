import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
    border: 0;
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  html {
    @media ${p => p.theme.media.shouldAnimate} {
      scroll-behavior: smooth;
    }
  }

  body {
    background-color: ${p => p.theme.color.dark};
    color: ${p => p.theme.color.light};
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
