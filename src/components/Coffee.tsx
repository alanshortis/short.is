import type { FC } from 'react';
import styled from 'styled-components';
import { A } from '.';

const StyledDiv = styled.div`
  border-top: ${p => p.theme.borderSize} solid currentColor;
  margin-top: var(--spacing);
  padding: var(--spacing) 0;
`;

export const Coffee: FC = () => (
  <StyledDiv>
    <p>
      If you have found this post useful, please consider{' '}
      <A href="https://www.buymeacoffee.com/alanshortis" rel="me">
        buying me a coffee
      </A>
      .
    </p>
  </StyledDiv>
);
