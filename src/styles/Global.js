import { createGlobalStyle } from 'styled-components';
import FontImports from './FontImports';

const Global = createGlobalStyle`
  ${FontImports}

  :root {
    font-size: 100%; // 16px

    @media ${p => p.theme.media.small} {
      font-size: 112.5%; // 18px
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
    @media ${p => p.theme.media.shouldAnimate} {
      scroll-behavior: smooth;
    }
  }

  body {
    box-sizing: border-box;
    font-family: ${p => p.theme.font.family};
    font-weight: ${p => p.theme.font.weight};
    line-height: 1.75;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: red;
    color: white;
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

  h1, h2, h3, h4, .h4 {
    font-weight: 700;
    font-size: 2.488rem;
    line-height: 1.2em;
    margin-bottom: 1em;
  }

  h2 {
    font-size: 2.074rem;
  }

  h3 {
    font-size: 1.728rem;
  }

  h4 {
    font-size: 1.44rem;
  }
`;

export default Global;
