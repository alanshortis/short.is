import type { NextPage, GetStaticProps } from 'next';
import { type DailyList, getDailyPosts, pageCount } from '@/data';
import { generateDailyFeed } from '@/feeds';
import { DailyPage } from '@/components';

export const getStaticProps: GetStaticProps<DailyList> = () => {
  if (process.env.NODE_ENV === 'production') {
    generateDailyFeed();
  }

  return {
    props: {
      dailies: getDailyPosts(),
      currentPage: 1,
      totalPages: pageCount,
    },
  };
};

const Daily: NextPage<DailyList> = p => <DailyPage {...p} />;

export default Daily;

export const config = {
  unstable_runtimeJS: false,
};
