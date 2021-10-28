import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Menu } from './Menu';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Header: FC = () => (
  <StyledHeader>
    <Link href="/">
      <a>Logo</a>
    </Link>
    <Menu />
  </StyledHeader>
);
