import type { NextPage, GetStaticPropsResult } from 'next';
import { DailyPage } from '../../components';
import { DailyList } from '../../types';
import { dailyPosts, pageCount } from '../../data/daily';
import { generateDailyFeed } from '../../feeds';

export async function getStaticProps(): Promise<GetStaticPropsResult<DailyList>> {
  generateDailyFeed();

  return {
    props: {
      dailies: await dailyPosts(),
      currentPage: '1',
      totalPages: pageCount.toString(),
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

const Daily: NextPage<DailyList> = p => <DailyPage {...p} />;

export default Daily;
