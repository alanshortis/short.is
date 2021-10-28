import type { NextPage, GetStaticPropsResult } from 'next';
import { Layout } from '../../components/Layout';
import { Post } from '../../components/Post';
import { allPostsFrontMatter } from '../../data/posts';
import type { PostList } from '../../types/PostList';

export async function getStaticProps(): Promise<GetStaticPropsResult<PostList>> {
  return {
    props: {
      posts: allPostsFrontMatter,
    },
  };
}

const Writing: NextPage<PostList> = ({ posts }) => (
  <Layout title="Writing">
    <h1>Writing</h1>
    <Post posts={posts} />
  </Layout>
);

export default Writing;
