import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Container, Logo, Menu, Skip, VisuallyHidden } from '.';

const StyledHeader = styled.header`
  background-color: var(--background);
  margin-bottom: var(--spacing);
  top: 0;
  width: 100%;
  z-index: 1;
  @media ${p => p.theme.media.medium} {
    position: sticky;
    @supports (backdrop-filter: blur(10px)) {
      backdrop-filter: blur(10px);
      background-color: var(--header-background);
    }
  }
`;

const MenuContent = styled.div`
  align-items: center;
  border-bottom: ${p => p.theme.borderSize} solid currentColor;
  display: flex;
  justify-content: space-between;
  padding: var(--spacing) 0;
`;

export const Header: FC = () => (
  <StyledHeader>
    <Container>
      <MenuContent>
        <Link href="/">
          <VisuallyHidden>Alan Shortis</VisuallyHidden>
          <Logo />
        </Link>
        <Skip />
        <Menu />
      </MenuContent>
    </Container>
  </StyledHeader>
);
