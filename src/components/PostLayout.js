import styled from 'styled-components';
import PostStyles from './PostStyles';

export const PostArticle = styled.article`
  column-gap: var(--spacing);
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
  margin-top: calc(var(--spacing) / 4);
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
