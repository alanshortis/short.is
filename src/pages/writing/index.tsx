import type { NextPage, GetStaticPropsResult } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Layout, PostDate, Label } from '../../components';
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

const StyledPost = styled.a`
  display: block;
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
              <Label as="time" dateTime={year} aria-hidden>
                {year}
              </Label>
            </Sticker>
          </Aside>
          <PageBody>
            {posts
              .filter(post => post.year === year)
              .map(post => (
                <Link href={`/writing/${post.slug}`} key={post.slug} passHref>
                  <StyledPost>
                    <PostDate date={post.date} />
                    <h2 className="h3">{post.title}</h2>
                    <p>{post.intro}</p>
                    <Label>Read more &rarr;</Label>
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
