import { cloneElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const StyledNav = styled.nav`
  li {
    display: inline;
    margin-right: 1rem;
  }
`;

const MenuLink = ({ href, children }) => {
  const router = useRouter();
  const className = router.pathname === href ? 'active' : '';

  return <Link href={href}>{cloneElement(children, { className })}</Link>;
};

const MainNav = () => (
  <StyledNav>
    <ul>
      <li>
        <MenuLink href="/">
          <a>Writing</a>
        </MenuLink>
      </li>
      <li>
        <MenuLink href="/about">
          <a>About</a>
        </MenuLink>
      </li>
    </ul>
  </StyledNav>
);

export default MainNav;
