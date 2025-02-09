import type { NextPage } from 'next';
import { listPosts } from '@/lib';
import { A, PostBox } from '@/components';
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
            <li key={post.title}>
              <article>
                <PostBox href={`/writing/${post.slug}`} title={post.title} date={post.date} />
              </article>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default Home;
