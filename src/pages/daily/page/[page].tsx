import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { type DailyList, getDailyPosts, pageCount, PER_PAGE } from '@/data';
import { DailyPage } from '@/components';

export const getStaticPaths: GetStaticPaths = async () => {
  // This is a bit weird. I know I want n pages, so I need an array of those
  // page numbers to generate them. There is no need for `page/1`, so from
  // `page/2` up to the value of `pageCount`.
  const paths = Array(pageCount - 1)
    .fill(2)
    .map((page, i) => {
      return { params: { page: (page + i).toString() } };
    });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<DailyList> = async ({ params }) => {
  const offset = PER_PAGE * (Number(params?.page) - 1);

  return {
    props: {
      dailies: await getDailyPosts(offset),
      currentPage: params?.page as string,
      totalPages: pageCount.toString(),
    },
  };
};

const Page: NextPage<DailyList> = p => <DailyPage {...p} />;

export default Page;

export const config = {
  unstable_runtimeJS: false,
};
