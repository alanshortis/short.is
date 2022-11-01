import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import { Layout, PostDate, PostFormatting, Label } from '../../components';
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
  const { day, date, mdxContent } = daily;

  return {
    props: { day, date, mdxContent },
  };
};

export const config = {
  unstable_runtimeJS: false,
};

const Daily: NextPage<DailyPost> = ({ day, date, mdxContent }) => (
  <Layout title="Daily">
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
  </Layout>
);

export default Daily;
