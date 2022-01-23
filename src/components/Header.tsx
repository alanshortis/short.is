import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Logo, Menu, VisuallyHidden } from '.';

const StyledHeader = styled.header`
  align-items: center;
  background-color: var(--background);
  border-bottom: ${p => p.theme.borderSize} solid currentColor;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: var(--spacing);
  padding: var(--spacing) 0;
  top: 0;
  width: 100%;
  z-index: 1;
  @media ${p => p.theme.media.medium} {
    position: sticky;
  }
`;

export const Header: FC = () => (
  <StyledHeader>
    <Link href="/">
      <a>
        <VisuallyHidden>Alan Shortis</VisuallyHidden>
        <Logo />
      </a>
    </Link>
    <Menu />
  </StyledHeader>
);
