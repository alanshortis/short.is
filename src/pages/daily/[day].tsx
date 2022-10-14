import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import styled from 'styled-components';
import { Layout, PostList, Label } from '../../components';
import { Aside, Full, Grid, PageBody, Sticker } from '../../components/Grid';
import { DailyList } from '../../types';

const DailyContent = styled.article`
  ${Label} {
    margin-bottom: var(--spacing);
  }
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: { day: '101' },
    },
    {
      params: { day: '1' },
    },
  ];

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      day: params?.day,
    },
  };
};

export const config = {
  unstable_runtimeJS: false,
};

const Daily: NextPage<DailyList> = ({ day }) => (
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
          <Label as="h2">13 October 2022</Label>
        </Sticker>
      </Aside>
      <PageBody as={PostList}>
        <DailyContent>
          <p>hi</p>
        </DailyContent>
      </PageBody>
    </Grid>
  </Layout>
);

export default Daily;
