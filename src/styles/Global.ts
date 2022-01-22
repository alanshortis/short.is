import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  @font-face {
    font-family: ${p => p.theme.font.face};
    src: url(/fonts/manrope.woff2) format("woff2");
    font-display: swap;
    font-weight: 200 800;
  }

  :root {
    font-size: 100%;
    --background: ${p => p.theme.color.light};
    --foreground: ${p => p.theme.color.dark};
    --spacing: ${p => p.theme.spacing};

    @media ${p => p.theme.media.small} {
      font-size: 106.25%;
    }

    @media ${p => p.theme.media.medium} {
      font-size: 112.5%;
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
    font-weight: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
    @media ${p => p.theme.media.shouldAnimate} {
      scroll-behavior: smooth;
    }
  }

  body {
    background-color: var(--background);
    color: var(--foreground);
    font-family: ${p => p.theme.font.family};
    font-variation-settings: 'wght' ${p => p.theme.font.weight};
    height: 100%;
    line-height: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: var(--foreground);
    color: var(--background);
  }

  #__next {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 90rem;
    min-height: 100vh;
    padding: 0 1rem;
    width: 100%;
    @supports (min-height: -webkit-fill-available) {
      min-height: -webkit-fill-available;
    }
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
    cursor: pointer;
    text-decoration: none;
  }

  strong {
    font-weight: ${p => p.theme.font.weightBold};
  }

  em {
    font-variation-settings: 'ital' 1;
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

  h1, .h1, h2, h3, h4 {
    font-size: 3.052rem;
    font-variation-settings: 'wght' ${p => p.theme.font.weightBold};
    hyphens: auto;
    letter-spacing: -2px;
    line-height: 1.25;
    @media ${p => p.theme.media.small} {
      hyphens: none;
    }
  }

  h2, .h2  {
    font-size: 2.441rem;
  }

  h3, .h3 {
    font-size: 1.953rem;
  }

  h4, .h4 {
    font-size: 1.563rem;
  }
`;
