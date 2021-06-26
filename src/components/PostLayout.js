import styled from 'styled-components';
import PostStyles from './PostStyles';

export const PostArticle = styled.article`
  column-gap: calc(var(--spacing) * 2);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0 auto;
  max-width: ${p => p.theme.articleWidth};
  padding: var(--spacing);
  width: 100%;
  @media ${p => p.theme.media.medium} {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

export const PostMeta = styled.div`
  grid-column: 1 / 3;
  margin-bottom: var(--spacing);
  @media ${p => p.theme.media.medium} {
    grid-column: 1 / 6;
  }
`;

export const PostBody = styled(PostStyles)`
  grid-column: 1 / 3;
  @media ${p => p.theme.media.medium} {
    grid-column: 6 / 13;
  }
`;
