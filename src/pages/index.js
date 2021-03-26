import { allPostFrontMatter } from '../data/posts';
import { Layout, PostList } from '../components';

const Home = ({ meta, posts }) => (
  <Layout meta={meta}>
    <PostList posts={posts} />
  </Layout>
);

export const config = {
  unstable_runtimeJS: false,
};

export async function getStaticProps() {
  return {
    props: {
      posts: allPostFrontMatter,
    },
  };
}

export default Home;
