import type { NextPage } from 'next';
import { listPosts } from '@/lib';
import { A, PostBox, ReadingList } from '@/components';
import styles from './page.module.scss';

const Home: NextPage = () => {
  const posts = listPosts();

  return (
    <main className={styles.container}>
      <A />
      <h1 className={styles.title}>Alan Shortis is a web engineer</h1>
      <div className={styles.postList}>
        {posts.map(({ title, slug, date, featured }) => (
          <PostBox key={title} href={`/writing/${slug}`} title={title} date={date} isFeatured={featured} />
        ))}
      </div>
      {/* <ReadingList /> */}
    </main>
  );
};

export default Home;
