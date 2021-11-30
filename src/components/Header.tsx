import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Menu, VisuallyHidden } from '.';

const StyledHeader = styled.header`
  align-items: center;
  background-color: var(--background);
  border-bottom: ${p => p.theme.borderSize} solid currentColor;
  display: flex;
  margin: 0 auto;
  margin-bottom: var(--spacing);
  padding: var(--spacing) 0;
  position: sticky;
  top: 0;
  width: 100%;
  div {
    align-items: baseline;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
const StyledTitle = styled.a`
  font-size: 1.777rem;
  font-weight: ${p => p.theme.font.weightBold};
`;

export const Header: FC = () => (
  <StyledHeader>
    <div>
      <Link href="/">
        <StyledTitle>Alan Shortis</StyledTitle>
      </Link>
      <VisuallyHidden>
        <a href="#main">Skip to main content</a>
      </VisuallyHidden>
      <Menu />
    </div>
  </StyledHeader>
);
