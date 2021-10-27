import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: inherit;
    border: 0;
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  body {
    background-color: ${p => p.theme.color.dark};
    color: ${p => p.theme.color.light};
  }
`;
