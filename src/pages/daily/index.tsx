import { Fragment } from 'react';
import type { NextPage, GetStaticPropsResult } from 'next';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import styled from 'styled-components';
import { Layout, PostList, PostDate, Label, VisuallyHidden, Arrow } from '../../components';
import { Aside, Full, Grid, PageBody, Sticker } from '../../components/Grid';
import { DailyList, DailyPostMdx } from '../../types';
import { allDailies } from '../../data/all-dailies';

const DailyContent = styled.article`
  ${Label} {
    margin-bottom: var(--spacing);
  }
`;

// const DailyLink = styled.a`
//   color: var(--accent);
// `;

export async function getStaticProps(): Promise<GetStaticPropsResult<DailyList>> {
  const sortedDailies = allDailies.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

  return {
    props: {
      dailies: sortedDailies,
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

const Daily: NextPage<DailyList> = ({ dailies }) => (
  <Layout title="Daily">
    <Grid>
      <Full>
        <h1>Daily</h1>
      </Full>
      {dailies.map((daily: DailyPostMdx) => {
        return (
          <Fragment key={daily.date}>
            <Aside>
              <Sticker>
                <Label as="h2">
                  <Link href={`/daily/${daily.day}`}>
                    <a>
                      <Arrow>
                        <span aria-hidden>#</span>
                        {daily.day} <VisuallyHidden>Permalink</VisuallyHidden>
                      </Arrow>
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
      })}
    </Grid>
  </Layout>
);

export default Daily;
