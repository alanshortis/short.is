import { Fragment } from 'react';
import type { NextPage, GetStaticPropsResult } from 'next';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import styled from 'styled-components';
import { Layout, PostDate, Label, PostList } from '../../components';
import { Aside, Full, Grid, PageBody, Sticker } from '../../components/Grid';
import { LinkIcon } from '../../components/icons';
import { DailyList, DailyPostMdx } from '../../types';
import { allDailies } from '../../data/all-dailies';

const DailyContent = styled.article`
  ${Label} {
    margin-bottom: var(--spacing);
  }
`;

export async function getStaticProps(): Promise<GetStaticPropsResult<DailyList>> {
  // const sortedDailies = allDailies.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

  const dailies = allDailies(0, 1);

  return {
    props: {
      dailies,
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

const Daily: NextPage<DailyList> = ({ dailies }) => (
  <Layout title="Daily">
    {console.log(dailies)}
    <Grid>
      <Full>
        <h1>Daily</h1>
      </Full>
      {/* {dailies.map((daily: DailyPostMdx) => {
        return (
          <Fragment key={daily.date}>
            <Aside>
              <Sticker>
                <Label as="h2">
                  <Link href={`/daily/${daily.day}`} passHref>
                    <a>
                      <span aria-hidden>#</span>
                      {daily.day} &middot; <LinkIcon />
                    </a>
                  </Link>
                </Label>
              </Sticker>
            </Aside>
            <PageBody as={PostList}>
              <DailyContent>
                <PostDate date={daily.date} hasYear />
                <MDXRemote {...daily.mdxContent} />
              </DailyContent>
            </PageBody>
          </Fragment>
        );
      })} */}
    </Grid>
  </Layout>
);

export default Daily;
