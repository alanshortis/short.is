import type { NextPage } from 'next';
import { getPost } from '@/lib';
import { Markdown, PostDate } from '@/components';

interface Props {
  params: Promise<{ slug: string }>;
}

const Post: NextPage<Props> = async ({ params }) => {
  const slug = (await params).slug;
  const { title, date, content } = getPost(slug);

  return (
    <div>
      <h1>{title}</h1>
      <PostDate date={date} />
      <Markdown content={content} />
    </div>
  );
};

export default Post;
