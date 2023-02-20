import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { type DailyPost, postDays, postCount, getDailyPosts } from '@/data';
import { PageLayout } from '@/layouts';
import { Markdown, PostDate } from '@/components';

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
  const { day, date, content, title } = daily;

  return {
    props: { day, date, content, title },
  };
};

const Day: NextPage<Props> = ({ day, date, content, title }) => (
  <PageLayout title={`#${day}`} intro={title}>
    <h1>{day}</h1>
    <PostDate date={date} />
    <Markdown>{content}</Markdown>
  </PageLayout>
);

export default Day;

export const config = {
  unstable_runtimeJS: false,
};
