import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Arrow, Label, VisuallyHidden } from '.';

const StyledNav = styled.nav`
  display: flex;
  margin-bottom: var(--spacing);
  margin-top: auto;
  padding-top: var(--spacing);
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
  route?: `/${string}/`;
  hideCount?: boolean;
}

export const Pagination: FC<Props> = ({
  currentPage,
  totalPages,
  route = '/daily/page/',
  hideCount = false,
}) => (
  <StyledNav>
    {currentPage > 1 ? (
      <Arrow direction="left">
        <Link href={`${route}${currentPage - 1}`}>
          <a>Previous</a>
        </Link>
      </Arrow>
    ) : (
      <span />
    )}
    {!hideCount && (
      <Label>
        <VisuallyHidden>Page </VisuallyHidden>
        {currentPage} of {totalPages}
      </Label>
    )}
    {currentPage < totalPages ? (
      <Arrow>
        <Link href={`${route}${currentPage + 1}`}>
          <a>Next</a>
        </Link>
      </Arrow>
    ) : (
      <span />
    )}
  </StyledNav>
);
