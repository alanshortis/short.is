import type { NextPage, GetStaticPropsResult } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Layout, Label } from '../components';
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

const Daily: NextPage = ({ dailies }) => (
  <Layout title="Writing">
    {dailies.map((daily: DailyPost) => {
      return (
        <>
          <p>{daily.date}</p>
          <p>{daily.content}</p>
        </>
      );
    })}
    {/* <Grid>
      <Full>
        <h1>Daily</h1>
      </Full>
      <Aside>
        <Sticker>
          <Label as="h2">(Daily date)</Label>
        </Sticker>
      </Aside>
      <PageBody as="article">
        <p>Blah blah blah</p>
      </PageBody>
    </Grid> */}
  </Layout>
);

export default Daily;

// TODO: Recursively get file names from daily folder.
// Format MDX content for each post.
// Other post formatting.
