import type { NextPage, GetStaticPropsResult } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Layout, PostFormatting, PostDate, Label } from '../../components';
import { Aside, Full, Grid, PageBody, Sticker } from '../../components/Grid';
import { allPostsFrontMatter, postYears } from '../../data/all-posts';
import { generateRss } from '../../feed/generate-rss';
import type { PostList } from '../../types';

export async function getStaticProps(): Promise<GetStaticPropsResult<PostList>> {
  if (process.env.NODE_ENV === 'production') {
    generateRss();
  }

  return {
    props: {
      posts: allPostsFrontMatter,
      years: postYears,
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

const StyledPost = styled(PostFormatting)`
  display: block;
  &:not(:last-of-type) {
    margin-bottom: var(--spacing);
  }
  h3 {
    padding-top: calc(var(--spacing) / 2);
  }
`;

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
          <PageBody>
            {posts
              .filter(post => post.year === year)
              .map(post => (
                <Link href={`/writing/${post.slug}`} key={post.slug} passHref>
                  <StyledPost as="a">
                    <PostDate date={post.date} />
                    <h3>{post.title}</h3>
                    <p>{post.intro}</p>
                    <Label toTheRight>Read more &rarr;</Label>
                  </StyledPost>
                </Link>
              ))}
          </PageBody>
        </Fragment>
      ))}
    </Grid>
  </Layout>
);

export default Writing;
