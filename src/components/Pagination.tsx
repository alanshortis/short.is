import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Arrow, Label } from '.';

const StyledNav = styled.nav`
  display: flex;
  margin-bottom: calc(var(--spacing) * 2);
  span {
    display: flex;
    flex: 1;
    justify-content: center;
    &:first-of-type {
      justify-content: flex-start;
      margin-right: auto;
    }
    &:last-of-type {
      justify-content: flex-end;
      margin-left: auto;
    }
  }
`;

interface Props {
  currentPage: number;
  totalPages: number;
  route?: string;
}

export const Pagination: FC<Props> = ({ currentPage, totalPages, route = '/daily/page/' }) => (
  <StyledNav>
    {currentPage > 1 ? (
      <Arrow direction="left">
        <Link href={`${route}/${currentPage - 1}`}>
          <a>Previous</a>
        </Link>
      </Arrow>
    ) : (
      <span />
    )}
    <Label>
      Page {currentPage} of {totalPages}
    </Label>
    {currentPage < totalPages ? (
      <Arrow>
        <Link href={`${route}/${currentPage + 1}`}>
          <a>Next</a>
        </Link>
      </Arrow>
    ) : (
      <span />
    )}
  </StyledNav>
);
