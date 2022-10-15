import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import styled from 'styled-components';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Link from 'next/link';
import { Arrow, Layout, PostDate, PostFormatting, Label } from '../../components';
import { Aside, Full, Grid, PageBody, Sticker } from '../../components/Grid';
import { DailyPost } from '../../types';
import { allDailies, dailyContent } from '../../data/all-dailies';

const DailyContent = styled.article`
  ${Label} {
    margin-bottom: var(--spacing);
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allDailies.map(daily => ({
    params: { day: daily.day },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fileContent = dailyContent(params?.day as string);
  const mdxContent = await serialize(fileContent.content);

  return {
    props: {
      ...fileContent,
      mdxContent,
    },
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
      <PageBody>
        <Link href="/daily">
          <a>
            <Arrow direction="left">More dailies</Arrow>
          </a>
        </Link>
      </PageBody>
    </Grid>
  </Layout>
);

export default Daily;
