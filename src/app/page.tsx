import type { NextPage } from 'next';
import Link from 'next/link';
import { listPosts } from '@/lib';
import { A, PostDate } from '@/components';
import styles from './page.module.scss';

const Home: NextPage = () => {
  const posts = listPosts();

  return (
    <main className={styles.container}>
      <A />
      <div className={styles.intro}>
        <h1>Alan Shortis</h1>
        <p>
          Web engineer based in <del>London</del> <ins>Nottingham</ins>
        </p>
      </div>
      <div className={styles.postList}>
        <h2>Writing</h2>
        <ol>
          {posts.map(post => (
            <article key={post.title}>
              <li>
                <Link href={`/writing/${post.slug}`} className={styles.post}>
                  <h3>{post.title}</h3>
                  <PostDate date={post.date} />
                </Link>
              </li>
            </article>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default Home;
