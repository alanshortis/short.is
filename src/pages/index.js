import Link from 'next/link';
import { allPostFrontMatter } from '../data/posts';
import { Layout, PostDate } from '../components';

export async function getStaticProps() {
  return {
    props: {
      posts: allPostFrontMatter,
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

const Home = ({ meta, posts }) => (
  <Layout meta={meta}>
    {posts.map(post => (
      <Link key={post.slug} href={`/writing/${post.slug}`}>
        <a>
          <PostDate date={post.date} />
          <h2>{post.title}</h2>
          <p>{post.intro}</p>
        </a>
      </Link>
    ))}
  </Layout>
);

export default Home;
