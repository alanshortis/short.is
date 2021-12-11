import type { NextPage, GetStaticPropsResult } from 'next';
import { Layout, Post, VisuallyHidden } from '../../components';
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

const Writing: NextPage<PostList> = ({ posts }) => (
  <Layout title="Writing">
    <VisuallyHidden as="h1">Writing</VisuallyHidden>
    <Post posts={posts} />
  </Layout>
);

export default Writing;
