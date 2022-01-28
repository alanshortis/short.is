import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 90rem;
  padding: 0 var(--spacing);
  padding: 0 clamp(calc(var(--spacing) / 2), 5vw, calc(var(--spacing) * 2));
  width: 100%;
`;
