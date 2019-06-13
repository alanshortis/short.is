import { createGlobalStyle } from 'styled-components';

const PrismStyles = createGlobalStyle`
  code {
    font-family: ${p => p.theme.font.faceMono};
  }

  .gatsby-highlight-code-line {
    display: block;
    background-color: ${p => p.theme.color.accent};
  }
`;

export default PrismStyles;
