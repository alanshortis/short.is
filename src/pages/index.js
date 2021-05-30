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
  @media ${p => p.theme.media.medium} {
    flex-direction: row;
  }
  section {
    padding: ${p => p.theme.spacing};
    @media ${p => p.theme.media.medium} {
      width: 50vw;
    }
  }
`;

const Cover = styled.section`
  height: calc(50vh - ${p => p.theme.headerHeight});
  @media ${p => p.theme.media.medium} {
    height: calc(100vh - ${p => p.theme.headerHeight});
    position: sticky;
    top: ${p => p.theme.headerHeight};
  }
`;

const Home = ({ meta, posts }) => (
  <Layout meta={meta}>
    <HomePage>
      <Cover>
        <h1>Alan Shortis is a front end developer.</h1>
      </Cover>
      <section>
        <ol>
          {posts.map(post => (
            <li key={post.slug}>
              <Link href={`/writing/${post.slug}`}>
                <a>
                  <PostDate date={post.date} />
                  <h2>{post.title}</h2>
                  <p>{post.intro}</p>
                </a>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </HomePage>
  </Layout>
);

export default Home;
