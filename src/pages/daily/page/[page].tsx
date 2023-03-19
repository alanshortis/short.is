import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { type DailyList, getDailyPosts, pageCount, PER_PAGE } from '@/data';
import { DailyPage } from '@/components';

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Array(pageCount - 1)
    .fill(2)
    .map((page, i) => {
      return { params: { page: (page + i).toString() } };
    });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<DailyList> = ({ params }) => {
  const currentPage = Number(params?.page);
  const offset = PER_PAGE * (currentPage - 1);

  return {
    props: {
      dailies: getDailyPosts(offset),
      totalPages: pageCount,
      currentPage,
    },
  };
};

const Page: NextPage<DailyList> = p => <DailyPage {...p} />;

export default Page;

// export const config = {
//   unstable_runtimeJS: false,
// };
