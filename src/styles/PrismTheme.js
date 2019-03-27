import { createGlobalStyle } from 'styled-components';

const PrismTheme = createGlobalStyle`
  .gatsby-highlight-code-line {
    display: block;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export default PrismTheme;
