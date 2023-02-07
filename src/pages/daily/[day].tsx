import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { type DailyPost, postDays, postCount, getDailyPosts } from '@/data';
import { PageLayout } from '@/layouts';
import { Markdown, Pagination, PostDate } from '@/components';

interface Props extends DailyPost {
  postCount: number;
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = postDays.map(dayNumber => ({
    params: { day: dayNumber.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const offset = postCount - Number(params?.day);
  const [daily] = getDailyPosts(offset, 1);
  const { day, date, content } = daily;

  return {
    props: { day, date, postCount, content },
  };
};

const Day: NextPage<Props> = ({ day, date, postCount, content }) => (
  <PageLayout title={`#${day}`}>
    <h1>{day}</h1>
    <PostDate date={date} />
    <Markdown>{content}</Markdown>
    <Pagination currentPage={Number(day)} totalPages={postCount} path="/daily/" label="Day" />
  </PageLayout>
);

export default Day;

export const config = {
  unstable_runtimeJS: false,
};
