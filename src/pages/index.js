import getPosts from '../data/posts';
import PostList from '../components/PostList';

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
  const allPosts = getPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default Home;
