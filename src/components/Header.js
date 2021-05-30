import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Logo, MainNav } from '../components';

const StyledHeader = styled.header`
  align-items: center;
  background-color: var(--background);
  display: flex;
  height: ${p => p.theme.headerHeight};
  justify-content: space-between;
  margin: 0 auto;
  max-width: 90rem;
  padding: 0 ${p => p.theme.spacing};
  position: sticky;
  top: 0;
  width: 100%;
  @supports (backdrop-filter: blur(7px)) {
    backdrop-filter: blur(7px);
    background-color: transparent;
  }
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
