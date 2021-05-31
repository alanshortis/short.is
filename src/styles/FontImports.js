import { css } from 'styled-components';

const FontImports = css`
  @font-face {
    font-display: swap;
    font-family: ${p => p.theme.font.faceMono};
    font-style: normal;
    font-weight: ${p => p.theme.font.weight};
    src: url('/fonts/plex-subset.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: ${p => p.theme.font.face};
    font-style: normal;
    font-weight: ${p => p.theme.font.weight};
    src: url('/fonts/inter-regular-subset.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: ${p => p.theme.font.face};
    font-style: normal;
    font-weight: ${p => p.theme.font.weightBold};
    src: url('/fonts/inter-bold-subset.woff2') format('woff2');
  }
`;

export default FontImports;
