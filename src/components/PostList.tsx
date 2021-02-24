import Link from 'next/link';
import type Post from '../types/Post';

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li key={post.slug}>
        <Link href={post.slug}>
          <a>{post.slug}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default PostList;
