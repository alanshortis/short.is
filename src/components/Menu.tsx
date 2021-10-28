import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledMenu = styled.menu`
  margin: 0;
  li {
    display: inline;
    margin-left: 1rem;
  }
`;

export const Menu: FC = () => (
  <nav>
    <StyledMenu>
      <li>
        <Link href="/writing">
          <a>Writing</a>
        </Link>
      </li>
      <li>
        <Link href="/photography">
          <a>Photography</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </StyledMenu>
  </nav>
);
