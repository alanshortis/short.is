import Link from 'next/link';
import type { Post } from '../types';

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li>
        <Link href={post.slug}>
          <a>{post.slug}</a>
        </Link>
      </li>
    ))}
  </ul>
);

export default PostList;
