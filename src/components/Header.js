import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Logo, MainNav } from '../components';

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  height: var(--header-height);
  justify-content: space-between;
  margin: 0 auto;
  max-width: 90rem;
  padding: 0 var(--spacing);
  position: sticky;
  top: 0;
  width: 100%;
  div {
    display: flex;
  }
`;

const SchemeToggle = dynamic(() => import('../components/SchemeToggle'), {
  ssr: process.env.NODE_ENV === 'production',
});

const Header = () => (
  <StyledHeader>
    <Logo />
    <div>
      <MainNav />
      <SchemeToggle />
    </div>
  </StyledHeader>
);

export default Header;
