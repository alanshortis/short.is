import { Fragment } from 'react';
import type { NextPage, GetStaticPropsResult } from 'next';
import { Layout, DailyTitle } from '../components';
import { Aside, Full, Grid, PageBody, Sticker } from '../components/Grid';
import { DailyList, DailyPost } from '../types';
import { allDailies } from '../data/all-dailies';

export async function getStaticProps(): Promise<GetStaticPropsResult<DailyList>> {
  return {
    props: {
      dailies: allDailies,
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

const Daily: NextPage<DailyList> = ({ dailies }) => (
  <Layout title="Writing">
    <Grid>
      <Full>
        <h1>Daily</h1>
      </Full>
      {dailies.map((daily: DailyPost) => {
        return (
          <Fragment key={daily.date}>
            <Aside>
              <Sticker>
                <DailyTitle dailyTitle={daily.title} dailyDate={daily.date} />
              </Sticker>
            </Aside>
            <PageBody as="article">{daily.content}</PageBody>
          </Fragment>
        );
      })}
    </Grid>
  </Layout>
);

export default Daily;
