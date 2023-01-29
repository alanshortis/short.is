import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { type DailyPost, postDays, postCount, getDailyPosts } from '@/data';
import { PageLayout } from '@/layouts';
import { PostDate } from '@/components';

interface Props extends DailyPost {
  postCount: number;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postDays.map(dayNumber => ({
    params: { day: dayNumber.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const offset = postCount - Number(params?.day);
  const [daily] = await getDailyPosts(offset, 1);
  const { day, date, mdxContent } = daily;

  return {
    props: { day, date, mdxContent, postCount },
  };
};

const Day: NextPage<Props> = ({ day, date, mdxContent, postCount }) => (
  <PageLayout title={`#${day}`}>
    <h1>{day}</h1>
    <PostDate date={date} />
    <MDXRemote {...mdxContent} />
    <p>
      Post {day} of {postCount}
    </p>
  </PageLayout>
);

export default Day;
