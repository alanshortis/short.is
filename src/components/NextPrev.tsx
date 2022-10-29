import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import type { Post } from '../types';
import { Arrow, Label, VisuallyHidden } from '.';

const StyledLink = styled(Link)<{ isNewer?: boolean }>`
  grid-column: 1 / -1;
  text-align: ${p => (p.isNewer ? 'right' : 'left')};
  @media ${p => p.theme.media.small} {
    grid-column: ${p => (p.isNewer ? '2 / 2' : '1 / 1')};
  }
  @media ${p => p.theme.media.medium} {
    grid-column: ${p => (p.isNewer ? '7 / 13' : '1 / 6')};
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.25rem;
    font-variation-settings: 'wght' ${p => p.theme.font.weightBold};
    line-height: 1.563;
  }
  ${Label} {
    display: block;
    margin-bottom: calc(var(--spacing) / 2);
  }
`;

type Props = Pick<Post, 'nextPost' | 'prevPost'>;

export const NextPrev: FC<Props> = ({ nextPost, prevPost }) => (
  <>
    <VisuallyHidden as="h2">More posts</VisuallyHidden>
    {prevPost ? (
      <StyledLink href={`/writing/${prevPost.slug}`}>
        <Label>
          <Arrow direction="left">Older</Arrow>
        </Label>
        <p className="h4">{prevPost.title}</p>
      </StyledLink>
    ) : (
      <StyledLink as="div" />
    )}
    {nextPost && (
      <StyledLink href={`/writing/${nextPost.slug}`} isNewer>
        <Label>
          <Arrow>Newer</Arrow>
        </Label>
        <p className="h4">{nextPost.title}</p>
      </StyledLink>
    )}
  </>
);
