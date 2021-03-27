import Link from 'next/link';
import PropTypes from 'prop-types';
import { allPostFrontMatter } from '../data/posts';
import { Layout, PostList } from '../components';

const Home = ({ meta, posts }) => (
  <Layout meta={meta}>
    <h1>Alan Shortis is a front end developer</h1>
    <Link href="/about">
      <a>Tell me more &rarr;</a>
    </Link>
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

Home.propTypes = {
  meta: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
    twitter: PropTypes.string,
    url: PropTypes.string,
    year: PropTypes.number,
  }).isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      intro: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
      nextPostSlug: PropTypes.string,
      prevPostSlug: PropTypes.string,
    })
  ).isRequired,
};

export default Home;
