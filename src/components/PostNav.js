import Link from 'next/link';
import styled from 'styled-components';
import { Label } from '../components';

const StyledNav = styled.nav`
  column-gap: var(--margin);
  display: grid;
  grid-gap: var(--spacing);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0 auto;
  max-width: ${p => p.theme.articleWidth};
  padding: var(--spacing);
  width: 100%;
`;

const PostLink = styled.a`
  cursor: pointer;
  text-align: ${p => (p.isRight ? 'right' : 'left')};
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const PostNav = ({ nextPost, prevPost }) => (
  <StyledNav>
    {prevPost ? (
      <Link href={`/writing/${prevPost.slug}`} passHref>
        <PostLink>
          <p>
            <Label>&larr; Older</Label>
          </p>
          <p>{prevPost.title}</p>
        </PostLink>
      </Link>
    ) : (
      <div></div>
    )}
    {nextPost && (
      <Link href={`/writing/${nextPost.slug}`} passHref>
        <PostLink isRight>
          <p>
            <Label>Newer &rarr;</Label>
          </p>
          <p>{nextPost.title}</p>
        </PostLink>
      </Link>
    )}
  </StyledNav>
);

export default PostNav;
