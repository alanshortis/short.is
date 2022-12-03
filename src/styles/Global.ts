import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  @font-face {
    font-family: ${p => p.theme.font.face};
    src: url(/fonts/soehne-buch-subset.woff2) format("woff2");
    font-display: swap;
    font-weight: ${p => p.theme.font.weight};
  }

  @font-face {
    font-family: ${p => p.theme.font.face};
    src: url(/fonts/soehne-halbfett-subset.woff2) format("woff2");
    font-display: swap;
    font-weight: ${p => p.theme.font.weightBold};
  }

  @font-face {
    font-family: ${p => p.theme.font.faceMono};
    src: url(/fonts/soehne-mono-buch-subset.woff2) format("woff2");
    font-display: swap;
    font-weight: ${p => p.theme.font.weight};
  }

  @font-face {
    font-family: 'WarnTriangle';
    src: local("Arial");
    unicode-range: U+25B4;
  }

  :root {
    font-size: 105%;
    --background: ${p => p.theme.color.light};
    --foreground: ${p => p.theme.color.dark};
    --accent: ${p => p.theme.color.accent};
    --header-background: ${p => p.theme.color.header};
    --spacing: ${p => p.theme.spacing};
    --inline-code-background: ${p => p.theme.color.inlineCodeBackground};

    @media ${p => p.theme.media.small} {
      font-size: 111.25%;
    }

    @media ${p => p.theme.media.medium} {
      font-size: 117.5%;
    }

    & body.dark {
      --background: ${p => p.theme.color.dark};
      --foreground: ${p => p.theme.color.light};
      --accent: ${p => p.theme.color.accentDark};
      --header-background: ${p => p.theme.color.headerDark};
      --inline-code-background: ${p => p.theme.color.inlineCodeBackgroundDark};
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
    font-feature-settings: "ss01", "ss02", "tnum";
    font-weight: ${p => p.theme.font.weight};
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
    min-height: 100vh;
    @supports (min-height: -webkit-fill-available) {
      min-height: -webkit-fill-available;
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
    font-style: normal;
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
    font-size: 2.441rem;
    font-weight: ${p => p.theme.font.weightBold};
    line-height: 1.25;
    text-indent: -0.055em;
    @media ${p => p.theme.media.small} {
      font-size: 3.052rem;
    }
  }

  h2, .h2  {
    font-size: 1.953rem;
    @media ${p => p.theme.media.small} {
      font-size: 2.441rem;
    }
  }

  h3, .h3 {
    font-size: 1.563rem;
    @media ${p => p.theme.media.small} {
      font-size: 1.953rem;
    }
  }

  h4, .h4 {
    font-size: 1rem;
    @media ${p => p.theme.media.small} {
      font-size: 1.563rem;
    }
  }
`;
