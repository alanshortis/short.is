import type { FC } from 'react';
import { Fragment } from 'react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { Label, Layout, PostDate, PostList } from '.';
import { Aside, Full, Grid, PageBody, Sticker } from './Grid';
import { LinkIcon } from './icons';
import { DailyList, DailyPost } from '../types';

export const DailyPage: FC<DailyList> = ({ dailies, currentPage, totalPages }) => (
  <Layout title={`Daily: ${currentPage}`}>
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
              <article>
                <PostDate date={daily.date} hasYear />
                <MDXRemote {...daily.mdxContent} />
              </article>
              <p>
                {currentPage} / {totalPages}
              </p>
            </PageBody>
          </Fragment>
        );
      })}
    </Grid>
  </Layout>
);
