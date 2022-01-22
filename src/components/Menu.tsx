import type { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import type { MenuItem } from '../types';

const SchemeToggle = dynamic(() => import('./SchemeToggle'), {
  ssr: process.env.NODE_ENV === 'production',
});

const Container = styled.div`
  display: flex;
  column-gap: calc(var(--spacing) / 2);
  align-items: center;
`;

const StyledNav = styled.nav`
  display: inline-flex;
  position: relative;
  /* Eyeballing the right position... */
  top: -2px;
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

const pages: MenuItem[] = [{ title: 'Writing', path: '/writing' }];

export const Menu: FC = () => {
  const router = useRouter();

  return (
    <Container>
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
      <SchemeToggle />
    </Container>
  );
};
