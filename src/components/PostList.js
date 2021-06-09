import Link from 'next/link';
import styled from 'styled-components';
import { PostDate } from '../components';

const StyledList = styled.ol`
  border-top: 1px solid var(--divider);
  @media ${p => p.theme.media.medium} {
    border-top: none;
    border-left: 1px solid var(--divider);
  }
`;

const Post = styled.li`
  a {
    display: block;
    padding: var(--spacing);
    transition: background-color 200ms ease;
    &:hover {
      background-color: var(--secondary-background);
    }
  }
  .h4 {
    margin-bottom: calc(var(--spacing) / 4);
  }
`;

const PostList = ({ posts }) => (
  <StyledList>
    {posts.map(post => (
      <Post key={post.slug}>
        <Link href={`/writing/${post.slug}`}>
          <a>
            <PostDate date={post.date} updated={post.updated} />
            <p className="h4">{post.title}</p>
            <p>{post.intro}</p>
          </a>
        </Link>
      </Post>
    ))}
  </StyledList>
);

export default PostList;
