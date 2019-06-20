import { css } from 'styled-components';
import sans from './sans-regular.woff2';
import sansItalic from './sans-italic.woff2';
import sansBold from './sans-semibold.woff2';
import sansBoldItalic from './sans-semibold-italic.woff2';
import mono from './mono-regular.woff2';
import monoItalic from './mono-italic.woff2';

const atRules = css`
  @font-face {
    font-display: swap;
    font-family: ${p => p.theme.font.face};
    font-style: normal;
    font-weight: ${p => p.theme.font.weight};
    src: local(${p => p.theme.font.face}), url(${sans}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: ${p => p.theme.font.face};
    font-style: italic;
    font-weight: ${p => p.theme.font.weight};
    src: local(${p => p.theme.font.face}), url(${sansItalic}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: ${p => p.theme.font.face};
    font-style: normal;
    font-weight: ${p => p.theme.font.weightBold};
    src: local(${p => p.theme.font.face}), url(${sansBold}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: ${p => p.theme.font.face};
    font-style: italic;
    font-weight: ${p => p.theme.font.weightBold};
    src: local(${p => p.theme.font.face}), url(${sansBoldItalic}) format('woff2');
  }

  @font-face {
    font-family: ${p => p.theme.font.faceMono};
    font-weight: ${p => p.theme.font.weight};
    font-style: normal;
    font-display: swap;
    src: local(${p => p.theme.font.faceMono}), url(${mono}) format('woff2');
  }

  @font-face {
    font-family: ${p => p.theme.font.faceMono};
    font-weight: ${p => p.theme.font.weight};
    font-style: italic;
    font-display: swap;
    src: local(${p => p.theme.font.faceMono}), url(${monoItalic}) format('woff2');
  }
`;

export default atRules;
