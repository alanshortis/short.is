import { css } from 'styled-components';
import regular from '../../node_modules/inter-ui/Inter (web)/Inter-Regular.woff2';
import regularItalic from '../../node_modules/inter-ui/Inter (web)/Inter-Italic.woff2';
import bold from '../../node_modules/inter-ui/Inter (web)/Inter-Bold.woff2';
import boldItalic from '../../node_modules/inter-ui/Inter (web)/Inter-BoldItalic.woff2';

const fontImports = css`
  @font-face {
    font-display: swap;
    font-family: ${p => p.theme.font.face};
    font-style: normal;
    font-weight: ${p => p.theme.font.weight};
    src: url(${regular}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: ${p => p.theme.font.face};
    font-style: italic;
    font-weight: ${p => p.theme.font.weight};
    src: url(${regularItalic}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: ${p => p.theme.font.face};
    font-style: normal;
    font-weight: ${p => p.theme.font.weightBold};
    src: url(${bold}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: ${p => p.theme.font.face};
    font-style: italic;
    font-weight: ${p => p.theme.font.weightBold};
    src: url(${boldItalic}) format('woff2');
  }
`;

export default fontImports;
