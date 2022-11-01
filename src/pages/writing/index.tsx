import type { NextPage, GetStaticPropsResult } from 'next';
import { Fragment } from 'react';
import { Layout, PostIndexItem, Label } from '../../components';
import { Aside, Full, Grid, PageBody, Sticker } from '../../components/Grid';
import { allWritingFrontMatter, writingYears } from '../../data/writing';
import type { PostList } from '../../types';

export async function getStaticProps(): Promise<GetStaticPropsResult<PostList>> {
  return {
    props: {
      posts: allWritingFrontMatter,
      // TODO: I need to work this out but it's late
      // @ts-ignore
      years: writingYears,
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

const Writing: NextPage<PostList> = ({ posts, years }) => (
  <Layout title="Writing">
    <Grid>
      <Full>
        <h1>Writing</h1>
      </Full>
      {years.map(year => (
        <Fragment key={year}>
          <Aside>
            <Sticker>
              <Label as="h2">{year}</Label>
            </Sticker>
          </Aside>
          <PageBody as="article">
            {posts
              .filter(post => post.year === year)
              .map(post => (
                <PostIndexItem
                  key={post.slug}
                  slug={post.slug}
                  date={post.date}
                  title={post.title}
                  intro={post.intro}
                />
              ))}
          </PageBody>
        </Fragment>
      ))}
    </Grid>
  </Layout>
);

export default Writing;
