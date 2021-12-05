import styled from 'styled-components';
import { PostFormatting } from '.';

export const PostTitle = styled.h1`
  margin-bottom: var(--spacing);
`;

export const PostArticle = styled.article`
  column-gap: calc(var(--spacing) * 2);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media ${p => p.theme.media.medium} {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

export const PostMeta = styled.div`
  grid-column: 1 / 3;
  margin-bottom: var(--spacing);
  @media ${p => p.theme.media.medium} {
    grid-column: 1 / 13;
  }
`;

export const PostBody = styled(PostFormatting)`
  grid-column: 1 / 3;
  margin-bottom: var(--spacing);
  @media ${p => p.theme.media.medium} {
    grid-column: 6 / 13;
  }
`;
