import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import type { FrontMatter } from '../types';
import { Label, PostFormatting, PostDate } from '.';

const StyledPost = styled(PostFormatting)`
  display: block;
  &:not(:last-of-type) {
    margin-bottom: var(--spacing);
  }
  h3 {
    padding-top: calc(var(--spacing) / 2);
  }
`;

export const PostIndexItem: FC<FrontMatter> = ({ slug, date, title, intro, year }) => (
  <Link href={`/writing/${slug}`} passHref>
    <StyledPost as="a">
      <PostDate date={date} year={year} />
      <h3>{title}</h3>
      <p>{intro}</p>
      <Label toTheRight>Read more &rarr;</Label>
    </StyledPost>
  </Link>
);
