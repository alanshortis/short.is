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
    <main>
      <article className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.meta}>
          <PostDate date={date} />
        </div>
        <div className={styles.content}>
          <Markdown content={content} />
        </div>
      </article>
    </main>
  );
};

export default Post;
