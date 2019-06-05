import { createGlobalStyle } from 'styled-components';

const PrismStyles = createGlobalStyle`
  .gatsby-highlight-code-line {
    display: block;
    background-color: ${p => p.theme.colors.accent};
  }
`;

export default PrismStyles;
