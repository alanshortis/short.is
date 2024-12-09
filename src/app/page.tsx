import type { NextPage } from 'next';
import Link from 'next/link';
import { listPosts } from '@/lib';
import { PostDate } from '@/components';

const Home: NextPage = () => {
  const posts = listPosts();

  return (
    <div>
      <h1>Home</h1>
      <ol>
        {posts.map(post => (
          <li key={post.title}>
            <Link href={`/writing/${post.slug}`}>
              <p>{post.title}</p>
              <PostDate date={post.date} />
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Home;
