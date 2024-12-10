import type { NextPage } from 'next';
import Link from 'next/link';
import { listPosts } from '@/lib';
import { PostDate } from '@/components';
import styles from './page.module.scss';

const Home: NextPage = () => {
  const posts = listPosts();

  return (
    <main className={styles.splitContainer}>
      <div>
        <h1>Home</h1>
      </div>
      <div>
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
    </main>
  );
};

export default Home;
