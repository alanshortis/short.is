import type { NextPage, Metadata } from 'next';
import { getPost } from '@/lib';
import { Markdown, PostDate } from '@/components';
import styles from './writing.module.scss';

interface Props {
  params: Promise<{ slug: string }>;
}

// Set dynamic title meta tag
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const slug = (await params).slug;
  const { title } = getPost(slug);

  return {
    title: `Alan Shortis | ${title}`,
  };
};

const Post: NextPage<Props> = async ({ params }) => {
  const slug = (await params).slug;
  const { title, date, content } = getPost(slug);

  return (
    <article className={styles.container}>
      <header className={styles.title}>
        <h1>{title}</h1>
      </header>
      <aside className={styles.meta}>
        <PostDate date={date} />
      </aside>
      <div className={styles.content}>
        <Markdown content={content} />
      </div>
    </article>
  );
};

export default Post;
