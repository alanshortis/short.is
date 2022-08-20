import type { FC } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Container, Label } from '.';

const SchemeToggle = dynamic(() => import('./SchemeToggle'), {
  ssr: process.env.NODE_ENV === 'production',
});

const StyledFooter = styled.footer`
  --safe-area-inset-bottom: env(safe-area-inset-bottom);
  border-top: ${p => p.theme.borderSize} solid currentColor;
  display: flex;
  justify-content: space-between;
  padding: var(--spacing) 0;
  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    padding-bottom: calc(var(--safe-area-inset-bottom) + var(--spacing));
  }
`;

export const Footer: FC = () => (
  <Container>
    <StyledFooter>
      <SchemeToggle />
      <Label>
        <a href="/writing/feed.xml">RSS</a> &middot; <a href="#top">Top &uarr;</a>
      </Label>
    </StyledFooter>
  </Container>
);
