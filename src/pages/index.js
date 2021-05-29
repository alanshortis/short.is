import Link from 'next/link';
import { allPostFrontMatter } from '../data/posts';
import { Layout } from '../components';

export async function getStaticProps() {
  return {
    props: {
      posts: allPostFrontMatter,
    },
  };
}

const Home = ({ meta, posts }) => (
  <Layout meta={meta}>
    {posts.map(post => (
      <Link key={post.slug} href={`/writing/${post.slug}`}>
        <a>
          <time dateTime={post.date}>{post.date}</time>
          <h2>{post.title}</h2>
          <p>{post.intro}</p>
        </a>
      </Link>
    ))}
  </Layout>
);

export default Home;
