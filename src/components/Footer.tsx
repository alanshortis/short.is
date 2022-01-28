import type { FC } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { MetaContext } from '../data/meta';
import { Container, Label } from '.';

const StyledFooter = styled.footer`
  --safe-area-inset-bottom: env(safe-area-inset-bottom);
  border-top: ${p => p.theme.borderSize} solid currentColor;
  display: flex;
  justify-content: space-between;
  padding: var(--spacing) 0;
  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    padding-bottom: calc(var(--safe-area-inset-bottom) + var(--spacing));
  }
`;

export const Footer: FC = () => {
  const { year, author } = useContext(MetaContext);

  return (
    <Container>
      <StyledFooter>
        <p>
          &copy; {year} {author}
        </p>
        <Label>
          <a href="/writing/feed.xml">RSS</a> &middot; <a href="#top">Top &uarr;</a>
        </Label>
      </StyledFooter>
    </Container>
  );
};
