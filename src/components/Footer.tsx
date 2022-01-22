import type { FC } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { MetaContext } from '../data/meta';
import { Label } from '.';

const StyledFooter = styled.footer`
  border-top: ${p => p.theme.borderSize} solid currentColor;
  display: flex;
  justify-content: space-between;
  padding: var(--spacing) 0;
`;

export const Footer: FC = () => {
  const { year, author } = useContext(MetaContext);

  return (
    <StyledFooter>
      <p>
        &copy; {year} {author}
      </p>
      <Label>
        <a href="/writing/feed.xml">RSS</a> &middot; <a href="#top">Top &uarr;</a>
      </Label>
    </StyledFooter>
  );
};
