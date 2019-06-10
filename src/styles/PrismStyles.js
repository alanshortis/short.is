import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

const PrismStyles = createGlobalStyle`
  @font-face {
    font-family: ${fonts.settings.faceMono};
    font-weight: ${fonts.settings.weight};
    font-style: normal;
    font-display: swap;
    src: local(${fonts.settings.faceMono}), url(${fonts.mono}) format('woff2');
  }

  @font-face {
    font-family: ${fonts.settings.faceMono};
    font-weight: ${fonts.settings.weight};
    font-style: italic;
    font-display: swap;
    src: local(${fonts.settings.faceMono}), url(${fonts.monoItalic}) format('woff2');
  }

  code {
    font-family: ${fonts.settings.faceMono};
  }

  .gatsby-highlight-code-line {
    display: block;
    background-color: ${p => p.theme.colors.accent};
  }
`;

export default PrismStyles;
