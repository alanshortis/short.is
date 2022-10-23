import type { FC } from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { Arrow, Label, Layout, Pagination, PostDate, PostList } from '.';
import { Aside, Full, Grid, PageBody, Sticker } from './Grid';
import { LinkIcon } from './icons';
import { DailyList, DailyPost } from '../types';

const Content = styled.div`
  margin-top: var(--spacing);
`;

export const DailyPage: FC<DailyList> = ({ dailies, currentPage, totalPages }) => (
  <Layout title={`Daily, page ${currentPage}`}>
    <Grid>
      <Full>
        <h1>Daily</h1>
      </Full>
      {dailies.map((daily: DailyPost) => {
        return (
          <Fragment key={daily.date}>
            <Aside>
              <Sticker>
                <Label as="h2">
                  <Arrow>
                    <Link href={`/daily/${daily.day}`} passHref>
                      <a>
                        <span aria-hidden>#</span>
                        {daily.day}
                      </a>
                    </Link>
                  </Arrow>
                </Label>
              </Sticker>
            </Aside>
            <PageBody as={PostList}>
              <article>
                <PostDate date={daily.date} hasYear />
                <Content>
                  <MDXRemote {...daily.mdxContent} />
                </Content>
              </article>
            </PageBody>
          </Fragment>
        );
      })}
    </Grid>
    <Pagination currentPage={Number(currentPage)} totalPages={Number(totalPages)} />
  </Layout>
);
