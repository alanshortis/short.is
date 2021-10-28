import type { NextPage, GetStaticPropsResult } from 'next';
import type { FrontMatter } from '../../data/posts';
import { Layout } from '../../components/Layout';
import { Post } from '../../components/Post';
import { allPostsFrontMatter } from '../../data/posts';

interface Props {
  posts: FrontMatter[];
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      posts: allPostsFrontMatter,
    },
  };
}

const Writing: NextPage<Props> = ({ posts }) => (
  <Layout title="Writing">
    <h1>Writing</h1>
    <Post posts={posts} />
  </Layout>
);

export default Writing;
