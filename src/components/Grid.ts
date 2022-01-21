import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  gap: calc(var(--spacing) * 2);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-bottom: calc(var(--spacing) * 2);
  @media ${p => p.theme.media.medium} {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

export const Full = styled.div`
  grid-column: 1 / -1;
`;

export const Aside = styled.div`
  grid-column: 1 / -1;
  @media ${p => p.theme.media.medium} {
    grid-column: 1 / 6;
  }
`;

export const PageBody = styled.div`
  grid-column: 1 / -1;
  @media ${p => p.theme.media.medium} {
    grid-column: 6 / 13;
  }
`;

export const Sticker = styled.div`
  @media ${p => p.theme.media.medium} {
    grid-column: 1 / 6;
    position: sticky;
    top: 8rem;
  }
`;
