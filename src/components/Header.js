import dynamic from 'next/dynamic';
import Link from 'next/link';
import styled from 'styled-components';
import { Logo, RssIcon, VisuallyHidden } from '../components';

const SchemeToggle = dynamic(() => import('../components/SchemeToggle'), {
  ssr: process.env.NODE_ENV === 'production',
});

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
  z-index: 1;
  @supports (backdrop-filter: blur(7px)) {
    backdrop-filter: blur(7px);
    background-color: transparent;
  }
  div {
    display: flex;
  }
`;

const Header = () => (
  <StyledHeader>
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
    <div>
      <Link href="writing/feed.xml">
        <a title="Subcribe to the RSS feed">
          <VisuallyHidden>Subcribe to the RSS feed</VisuallyHidden>
          <RssIcon />
        </a>
      </Link>
      <SchemeToggle />
    </div>
  </StyledHeader>
);

export default Header;
