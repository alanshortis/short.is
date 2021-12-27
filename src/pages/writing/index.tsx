import type { NextPage, GetStaticPropsResult } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import { Layout, PostFormatting, PostDate, Label } from '../../components';
import { Aside, Full, Grid, PageBody, Sticker } from '../../components/Grid';
import { allPostsFrontMatter } from '../../data/all-posts';
import { generateRss } from '../../feed/generate-rss';
import type { PostList } from '../../types';

export async function getStaticProps(): Promise<GetStaticPropsResult<PostList>> {
  if (process.env.NODE_ENV === 'production') {
    generateRss();
  }

  return {
    props: {
      posts: allPostsFrontMatter,
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

const StyledPost = styled(PostFormatting)`
  display: block;
  h2,
  p {
    padding: 0;
    margin-bottom: calc(var(--spacing) / 2);
  }
  &:last-of-type,
  p:last-of-type {
    margin-bottom: 0;
  }
`;

const ReadMore = styled.p`
  text-align: right;
  text-decoration: underline;
  white-space: nowrap;
  &::after {
    content: '→';
    display: inline-block;
    margin-left: 0.25rem;
    text-decoration: none;
  }
`;

const Writing: NextPage<PostList> = ({ posts }) => (
  <Layout title="Writing">
    <Grid>
      <Full>
        <h1>Writing</h1>
      </Full>
      {posts.map(({ slug, date, title, intro, year }) => (
        <>
          <Aside>
            <Sticker>
              <Label as="time" dateTime={year}>
                {year}
              </Label>
            </Sticker>
          </Aside>
          <PageBody>
            <Link key={slug} href={`/writing/${slug}`} passHref>
              <StyledPost as="a">
                <PostDate date={date} />
                <h2 className="h3">{title}</h2>
                <p>{intro}</p>
                <ReadMore>Read more</ReadMore>
              </StyledPost>
            </Link>
          </PageBody>
        </>
      ))}
    </Grid>
  </Layout>
);

export default Writing;
