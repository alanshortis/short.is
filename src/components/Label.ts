import styled from 'styled-components';

export const Label = styled.div<{ isSmall?: boolean }>`
  font-size: ${p => (p.isSmall ? '0.8rem' : '1rem')};
  letter-spacing: 2px;
  text-transform: uppercase;
`;
