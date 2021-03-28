import Link from 'next/link';
import { allPostFrontMatter } from '../data/posts';
import { Layout, PostList } from '../components';
import generateRss from '../feed/rss';

const Home = ({ meta, posts }) => (
  <Layout meta={meta}>
    <section>
      <h1>
        Alan Shortis is a front end developer
        <Link href="/about">
          <a>Tell me more &rarr;</a>
        </Link>
      </h1>
    </section>
    <section>
      <PostList posts={posts} />
    </section>
  </Layout>
);

export const config = {
  unstable_runtimeJS: false,
};

export async function getStaticProps() {
  generateRss();

  return {
    props: {
      posts: allPostFrontMatter,
    },
  };
}

export default Home;
