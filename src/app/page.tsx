import type { NextPage } from 'next';
import { listPosts } from '@/lib';
import { A, PostBox, ReadingList } from '@/components';
import styles from './page.module.scss';

const Home: NextPage = () => {
  const posts = listPosts();

  return (
    <main className={styles.container}>
      <A />
      <h1>Alan Shortis is a web engineer</h1>
      <div className={styles.postList}>
        <div className={styles.sectionHeader}>
          <h2>Writing</h2>
          <p>Things I have written, with varying degrees of quality</p>
        </div>
        <ol>
          {posts.map(post => (
            <li key={post.title} className={post.featured ? styles.featured : ''}>
              <PostBox href={`/writing/${post.slug}`} title={post.title} date={post.date} />
            </li>
          ))}
        </ol>
      </div>
      <ReadingList />
    </main>
  );
};

export default Home;
