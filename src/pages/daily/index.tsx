import type { NextPage, GetStaticProps } from 'next';
import { type DailyList, getDailyPosts, pageCount } from '@/data';
import { DailyPage } from '@/components';

export const getStaticProps: GetStaticProps<DailyList> = async () => {
  return {
    props: {
      dailies: await getDailyPosts(),
      currentPage: '1',
      totalPages: pageCount.toString(),
    },
  };
};

const Daily: NextPage<DailyList> = p => <DailyPage {...p} />;

export default Daily;
