import styled from 'styled-components';

export const Grid = styled.article`
  display: grid;
  gap: var(--spacing);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media ${p => p.theme.media.medium} {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;
