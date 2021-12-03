import type { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import type { MenuItem } from '../types';

const StyledNav = styled.nav`
  display: inline-block;
`;

const StyledList = styled.ul`
  margin: 0;
  li {
    display: inline;
    margin-left: 1rem;
    position: relative;
  }

  [aria-current='page']::after {
    --dot: 7px;
    --half-dot: 3.5px;
    background-color: currentColor;
    border-radius: var(--dot);
    content: '';
    cursor: default;
    height: var(--dot);
    left: calc(50% - var(--half-dot));
    position: absolute;
    top: var(--spacing);
    width: var(--dot);
  }
`;

const pages: MenuItem[] = [
  { title: 'Writing', path: '/writing' },
  { title: 'Photography', path: '/photography' },
  { title: 'About', path: '/about' },
];

export const Menu: FC = () => {
  const router = useRouter();

  return (
    <StyledNav>
      <StyledList role="menubar">
        {pages.map((page: MenuItem) => {
          const isCurrent = router.pathname.startsWith(page.path);

          return (
            <li key={page.path} role="none">
              <Link href={page.path}>
                <a role="menuitem" aria-current={isCurrent ? 'page' : 'false'}>
                  {page.title}
                </a>
              </Link>
            </li>
          );
        })}
      </StyledList>
    </StyledNav>
  );
};
