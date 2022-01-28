import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 90rem;
  padding: 0 calc(var(--spacing) / 2);
  width: 100%;
  @media ${p => p.theme.media.small} {
    padding: 0 var(--spacing);
  }
  @media ${p => p.theme.media.medium} {
    padding: 0 calc(var(--spacing) * 2);
  }
`;
