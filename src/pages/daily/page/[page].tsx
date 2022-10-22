import type { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { DailyPage } from '../../../components';
import { DailyList } from '../../../types';
import { dailyPosts, pageCount, PER_PAGE } from '../../../data/all-dailies';

export const getStaticPaths: GetStaticPaths = async () => {
  // This is a bit weird. I know I want n pages, so I need an array of those
  // page numbers to generate pages. There is no need for `page/1`, so from
  // `page/2` up to the value of `pageCount`.
  const paths = Array(pageCount - 1)
    .fill(2)
    .map((page, i) => {
      return { params: { page: (page + i).toString() } };
    });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const offset = PER_PAGE * (Number(params?.page) - 1);

  return {
    props: {
      dailies: await dailyPosts(offset),
      currentPage: params?.page,
      totalPages: pageCount.toString(),
    },
  };
};

export const config = {
  unstable_runtimeJS: false,
};

const Daily: NextPage<DailyList> = p => <DailyPage {...p} />;

export default Daily;
