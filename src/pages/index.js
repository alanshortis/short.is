import { allPostFrontMatter } from '../data/posts';
import { PostList } from '../components';

const Home = ({ posts }) => (
  <>
    <p>short.is v4</p>
    <PostList posts={posts} />
  </>
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
