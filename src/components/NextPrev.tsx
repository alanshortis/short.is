import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import type { Post } from '../types';
import { VisuallyHidden, Label } from '.';

const StyledLink = styled.a<{ isNewer?: boolean }>`
  grid-column-end: span 1;
  margin-bottom: var(--spacing);
  text-align: ${p => (p.isNewer ? 'right' : 'left')};
  @media ${p => p.theme.media.medium} {
    grid-column-end: span 6;
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.25rem;
    font-weight: ${p => p.theme.font.weightBold};
  }
  ${Label} {
    display: block;
    margin-bottom: var(--spacing);
  }
`;

type Props = Pick<Post, 'nextPost' | 'prevPost'>;

export const NextPrev: FC<Props> = ({ nextPost, prevPost }) => (
  <>
    <VisuallyHidden as="h2">More posts</VisuallyHidden>
    {prevPost ? (
      <Link href={`/writing/${prevPost.slug}`} passHref>
        <StyledLink>
          <Label>&larr; Older</Label>
          <p className="h4">{prevPost.title}</p>
        </StyledLink>
      </Link>
    ) : (
      <StyledLink as="div" />
    )}
    {nextPost && (
      <Link href={`/writing/${nextPost.slug}`} passHref>
        <StyledLink isNewer>
          <Label>Newer &rarr;</Label>
          <p className="h4">{nextPost.title}</p>
        </StyledLink>
      </Link>
    )}
  </>
);
