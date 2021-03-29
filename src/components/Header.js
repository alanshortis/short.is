import { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  useEffect(() => {
    import('../web-components/dark-mode');
  });

  return (
    <StyledHeader>
      <div>
        <Link href="/">
          <a>
            <span>Home page</span>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </div>
      <dark-mode></dark-mode>
    </StyledHeader>
  );
};

export default Header;
