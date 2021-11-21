import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Menu } from '.';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Header: FC = () => (
  <StyledHeader>
    <Link href="/">
      <a>Logo</a>
    </Link>
    <a href="#main">Skip to main content</a>
    <Menu />
  </StyledHeader>
);
