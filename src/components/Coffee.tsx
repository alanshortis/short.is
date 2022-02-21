import type { FC } from 'react';
import styled from 'styled-components';

const StyledCoffee = styled.div`
  border-top: ${p => p.theme.borderSize} solid currentColor;
  padding-top: var(--spacing);
`;

export const Coffee: FC = () => (
  <StyledCoffee>
    <p>
      If you have found this article useful please consider{' '}
      <a href="https://www.buymeacoffee.com/alanshortis">buying me a coffee</a>.
    </p>
  </StyledCoffee>
);
