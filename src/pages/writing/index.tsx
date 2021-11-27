import type { NextPage, GetStaticPropsResult } from 'next';
import { Layout, Post } from '../../components';
import { allPostsFrontMatter } from '../../data/posts';
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
    <h1>Writing</h1>
    <Post posts={posts} />
  </Layout>
);

export default Writing;
