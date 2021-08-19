import dynamic from 'next/dynamic';
import Link from 'next/link';
import styled from 'styled-components';
import { A, Logo, RssIcon, VisuallyHidden } from '../components';

const SchemeToggle = dynamic(() => import('../components/SchemeToggle'), {
  ssr: process.env.NODE_ENV === 'production',
});

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  height: ${p => p.theme.headerHeight};
  justify-content: space-between;
  margin: 0 auto;
  max-width: 90rem;
  padding: 0 var(--spacing);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
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
      <A href="/writing/feed.xml" title="Subcribe to the RSS feed">
        <VisuallyHidden>Subcribe to the RSS feed</VisuallyHidden>
        <RssIcon />
      </A>
      <SchemeToggle />
    </div>
  </StyledHeader>
);

export default Header;
