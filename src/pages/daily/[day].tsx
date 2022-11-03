import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import { Layout, Pagination, PostDate, PostFormatting, Label } from '../../components';
import { Aside, Full, Grid, PageBody, Sticker } from '../../components/Grid';
import { DailyPost } from '../../types';
import { dailyCount, dailyPosts, postDays } from '../../data/daily';

const DailyContent = styled.article`
  ${Label} {
    margin-bottom: var(--spacing);
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postDays.map(dayNumber => ({
    params: { day: dayNumber.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const offset = dailyCount - Number(params?.day);
  const [daily] = await dailyPosts(offset, 1);
  const { day, date, mdxContent, count } = daily;

  return {
    props: { day, date, mdxContent, count },
  };
};

export const config = {
  unstable_runtimeJS: false,
};

const Daily: NextPage<DailyPost> = ({ day, date, mdxContent, count }) => (
  <Layout title={`Daily #${day}`}>
    <Grid>
      <Full>
        <h1>
          <span aria-hidden>#</span>
          {day}
        </h1>
      </Full>
      <Aside>
        <Sticker>
          <PostDate date={date} hasYear hasShare />
        </Sticker>
      </Aside>
      <PageBody as={PostFormatting}>
        <DailyContent>
          <MDXRemote {...mdxContent} />
        </DailyContent>
      </PageBody>
    </Grid>
    <Pagination currentPage={Number(day)} totalPages={count} route="/daily/" hideCount />
  </Layout>
);

export default Daily;
