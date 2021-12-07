import styled from 'styled-components';

export const Grid = styled.article`
  column-gap: calc(var(--spacing) * 2);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: var(--spacing);
  @media ${p => p.theme.media.medium} {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;
