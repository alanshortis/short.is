import type { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import type { FrontMatter } from '../types';
import { Arrow, Label, PostFormatting, PostDate } from '.';

const StyledPost = styled(PostFormatting)`
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
  <Link href={`/writing/${slug}`} passHref>
    <StyledPost as="a">
      {isLatest ? <Label>Latest writing</Label> : <PostDate date={date} />}
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: intro }} />
      <Label toTheRight>
        <Arrow>Read more</Arrow>
      </Label>
    </StyledPost>
  </Link>
);
