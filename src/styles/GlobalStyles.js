import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import fonts from './fonts';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: ${fonts.settings.face};
    font-weight: ${fonts.settings.weight};
    font-style: normal;
    font-display: swap;
    src: local(${fonts.settings.face}), url(${fonts.sans}) format('woff2');
  }

  @font-face {
    font-family: ${fonts.settings.face};
    font-weight: ${fonts.settings.weight};
    font-style: italic;
    font-display: swap;
    src: local(${fonts.settings.face}), url(${fonts.sansItalic}) format('woff2');
  }

  @font-face {
    font-family: ${fonts.settings.face};
    font-weight: ${fonts.settings.weightBold};
    font-style: normal;
    font-display: swap;
    src: local(${fonts.settings.face}), url(${fonts.sansBold}) format('woff2');
  }

  @font-face {
    font-family: ${fonts.settings.face};
    font-weight: ${fonts.settings.weightBold};
    font-style: italic;
    font-display: swap;
    src: local(${fonts.settings.face}), url(${fonts.sansBoldItalic}) format('woff2');
  }

  ${normalize()}

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    background-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.type};
    font-family: ${fonts.settings.face}, sans-serif;
    font-weight: ${fonts.settings.weight};
  }

  strong, b {
    font-weight: ${fonts.settings.weightBold};
  }

  em, i {
    font-style: italic;
  }
`;

export default GlobalStyles;
