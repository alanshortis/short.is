import Link from 'next/link';
import styled from 'styled-components';
import { PostDate } from '../components';

const Post = styled.li`
  padding: ${p => p.theme.spacing};
`;

const PostList = ({ posts }) => (
  <ol>
    {posts.map(post => (
      <Post key={post.slug}>
        <Link href={`/writing/${post.slug}`}>
          <a>
            <PostDate date={post.date} />
            <h2>{post.title}</h2>
            <p>{post.intro}</p>
          </a>
        </Link>
      </Post>
    ))}
  </ol>
);

export default PostList;
