import Link from 'next/link';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import getPosts from '../data/posts';
import type Post from '../types/Post';
import type Meta from '../types/Meta';

interface Props {
  meta: Meta;
  posts: Post[];
}

const Home: React.FC<Props> = ({ meta, posts }) => (
  <Layout meta={meta}>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <PostList posts={posts} />
  </Layout>
);

export const config = {
  unstable_runtimeJS: false,
};

export async function getStaticProps() {
  const allPosts = getPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default Home;
