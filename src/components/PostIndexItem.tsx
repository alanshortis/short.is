import type { FC } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import type { FrontMatter } from '../types';
import { Arrow, Label, PostList, PostDate } from '.';

const LinkPrefetch = dynamic(() => import('./LinkPrefetch'), {
  ssr: process.env.NODE_ENV === 'production',
});

const StyledPost = styled(PostList)`
  display: block;
  &:not(:last-of-type) {
    margin-bottom: var(--spacing);
  }
  h3 {
    padding-top: calc(var(--spacing) / 2);
  }
`;

interface Props extends FrontMatter {
  isLatest?: boolean;
}

export const PostIndexItem: FC<Props> = ({ slug, date, title, intro, isLatest }) => (
  <LinkPrefetch>
    <Link href={`/writing/${slug}`} passHref>
      <StyledPost as="a">
        <PostDate date={date} prefix={isLatest ? 'Latest writing' : ''} hasYear={isLatest} />
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: intro }} />
        <Label toTheRight>
          <Arrow>Read more</Arrow>
        </Label>
      </StyledPost>
    </Link>
  </LinkPrefetch>
);
