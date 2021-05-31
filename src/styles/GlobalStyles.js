import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: strawford;
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/strawford-regular-webfont.woff2') format('woff2');
  }
  @font-face {
    font-display: swap;
    font-family: strawford;
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/strawford-medium-webfont.woff2') format('woff2');
  }
  @font-face {
    font-display: swap;
    font-family: strawford;
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/strawford-black-webfont.woff2') format('woff2');
  }

  :root {
    font-size: 90%;
    --background: ${p => p.theme.color.light};
    --color: ${p => p.theme.color.dark};

    @media ${p => p.theme.media.small} {
      font-size: 100%;
    }

    & body.dark {
      --background: ${p => p.theme.color.dark};
      --color: ${p => p.theme.color.light};
    }
  }

  *, *::before, *::after {
    box-sizing: inherit;
    border: 0;
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  html:focus-within {
    scroll-behavior: smooth;
    ${
      '' /* @media ${p => p.theme.media.shouldAnimate} {
      scroll-behavior: smooth;
    } */
    }
  }

  body {
    color: var(--color);
    background: var(--background);
    box-sizing: border-box;
    font-family: strawford, sans-serif;
    font-weight: 400;
    line-height: 1.75;
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  h1 {
    font-size: 2.488rem;
    font-weight: 700;
  }
  
  h2, h3, h4 {
    font-weight: 500;
  }
`;

export default GlobalStyles;
