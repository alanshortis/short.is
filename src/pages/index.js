import Link from 'next/link';
import styled from 'styled-components';
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

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  @media (min-width: 600px) {
    flex-direction: row;
  }
  section {
    padding: var(--spacing);
    @media (min-width: 600px) {
      width: 50vw;
    }
  }
`;

const Cover = styled.section`
  height: 25vh;
  @media (min-width: 600px) {
    position: sticky;
    top: var(--header-height);
    height: calc(100vh - var(--header-height));
  }
`;

const Home = ({ meta, posts }) => (
  <Layout meta={meta}>
    <HomePage>
      <Cover>
        <h1>Alan Shortis is a front end developer.</h1>
      </Cover>
      <section>
        {posts.map(post => (
          <Link key={post.slug} href={`/writing/${post.slug}`}>
            <a>
              <PostDate date={post.date} />
              <h2>{post.title}</h2>
              <p>{post.intro}</p>
            </a>
          </Link>
        ))}
      </section>
    </HomePage>
  </Layout>
);

export default Home;
