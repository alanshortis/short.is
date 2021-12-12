import type { NextPage, GetStaticPropsResult } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import { Layout, PostFormatting, PostDate } from '../../components';
import { Full, Grid, PageBody } from '../../components/Grid';
import { allPostsFrontMatter } from '../../data/all-posts';
import type { PostList } from '../../types';

export async function getStaticProps(): Promise<GetStaticPropsResult<PostList>> {
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
  margin-bottom: var(--spacing);
  padding-bottom: var(--spacing);
  &:not(:last-child) {
    border-bottom: ${p => p.theme.borderSize} solid currentColor;
  }
  h2,
  p {
    padding: 0;
    margin-bottom: calc(var(--spacing) / 2);
  }
  p:last-of-type {
    margin-bottom: 0;
  }
`;

const Writing: NextPage<PostList> = ({ posts }) => (
  <Layout title="Writing">
    <Grid>
      <Full>
        <h1>Writing</h1>
      </Full>
      <PageBody>
        {posts.map(({ slug, date, updated, title, intro }) => (
          <Link key={slug} href={`/writing/${slug}`} passHref>
            <StyledPost as="a">
              <h2 className="h3">{title}</h2>
              <p>
                <PostDate date={date} updated={updated} />
              </p>
              <p>{intro}</p>
            </StyledPost>
          </Link>
        ))}
      </PageBody>
    </Grid>
  </Layout>
);

export default Writing;
