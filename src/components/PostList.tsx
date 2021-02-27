import Link from 'next/link';
import PostDate from './PostDate';
import type Post from '../types/Post';

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.slug}>
        <Link href={post.slug}>
          <a>
            <h2>{post.title}</h2>
            <PostDate date={post.date} />
          </a>
        </Link>
      </li>
    ))}
  </ul>
);

export default PostList;
