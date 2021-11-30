import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  :root {
    font-size: 93.75%;
    --background: ${p => p.theme.color.light};
    --foreground: ${p => p.theme.color.dark};
    /* TODO */
    --spacing: calc(${p => p.theme.spacing} / 1);

    @media ${p => p.theme.media.small} {
      font-size: 100%;
    }

    @media ${p => p.theme.media.medium} {
      font-size: 106.25%;
      --spacing: ${p => p.theme.spacing};
    }

    & body.dark {
      --background: ${p => p.theme.color.dark};
      --foreground: ${p => p.theme.color.light};
    }
  }

  *, *::before, *::after {
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    font-weight: normal;
    margin: 0;
    padding: 0;
  }

  html {
    @media ${p => p.theme.media.shouldAnimate} {
      scroll-behavior: smooth;
    }
  }

  body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: ${p => p.theme.font.family};
    font-weight: ${p => p.theme.font.weight};
    line-height: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: currentColor;
  }

  #__next {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 90rem;
    min-height: 100vh;
    padding: 0 1rem;
    width: 100%;
    @media ${p => p.theme.media.small} {
      padding: 0 2rem;
    }
    @media ${p => p.theme.media.medium} {
      padding: 0 3rem;
    }
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

  strong {
    font-weight: ${p => p.theme.font.weightBold};
  }

  em {
    font-style: italic;
  }

  code,
  pre {
    font-family: ${p => p.theme.font.familyMono};
    font-size: 0.833rem;
  }

  button {
    background: none;
    color: currentColor;
    cursor: pointer;
    font: inherit;
  }

  main {
    flex: 1;
  }

  h1, h2, h3, h4 {
    font-size: 4.209rem;
    font-weight: ${p => p.theme.font.weightBold};
  }
`;
