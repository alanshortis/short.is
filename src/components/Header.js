import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Logo, MainNav } from '../components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
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
