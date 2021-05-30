import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 90%;
    --background: #e1e5ea;
    --color: #222831;
    --header-height: 5rem;
    --spacing: 2.5%;

    @media(min-width: 600px) {
      font-size: 100%;
    }

    & body.dark {
      --background: #222831;
      --color: #e1e5ea;
    }
  }

  *, *::before, *::after {
    box-sizing: inherit;
    border: 0;
    margin: 0;
    padding: 0;
    font-weight: normal;
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

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .hidden {
    display: none;
  }
`;

export default GlobalStyles;
