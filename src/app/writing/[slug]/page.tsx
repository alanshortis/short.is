import type { NextPage } from 'next';
import { getPost } from '@/lib';
import { Markdown, PostDate } from '@/components';
import styles from './writing.module.scss';

interface Props {
  params: Promise<{ slug: string }>;
}

const Post: NextPage<Props> = async ({ params }) => {
  const slug = (await params).slug;
  const { title, date, content } = getPost(slug);

  return (
    <article className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.meta}>
        <PostDate date={date} />
      </div>
      <div className={styles.content}>
        <Markdown content={content} />
      </div>
    </article>
  );
};

export default Post;
