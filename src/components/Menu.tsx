import type { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import type { MenuItem } from '../types';
import { activeMarker } from '.';

const Container = styled.div`
  display: flex;
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
    ${activeMarker};
  }
`;

const pages: MenuItem[] = [
  { title: 'Writing', path: '/writing' },
  { title: 'Daily', path: '/daily' },
  { title: 'About', path: '/about' },
];

export const Menu: FC = () => {
  const router = useRouter();

  return (
    <>
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
      </Container>
    </>
  );
};
