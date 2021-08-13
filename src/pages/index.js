import Link from 'next/link';
import styled from 'styled-components';
import { allPostFrontMatter } from '../data/posts';
import { Label, Layout, PostList } from '../components';
import generateRss from '../feed/rss';

export async function getStaticProps() {
  generateRss();

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
    @media ${p => p.theme.media.medium} {
      width: 50vw;
    }
  }
`;

const Cover = styled.section`
  height: auto;
  min-height: calc(50vh - ${p => p.theme.headerHeight});
  padding: var(--spacing);
  scroll-margin-top: calc(${p => p.theme.headerHeight});
  @media ${p => p.theme.media.medium} {
    height: calc(100vh - ${p => p.theme.headerHeight});
    position: sticky;
    top: ${p => p.theme.headerHeight};
  }
`;

const Title = styled.div`
  h1 {
    display: inline;
    margin-right: var(--spacing);
    mix-blend-mode: difference;
  }
`;

const Home = ({ posts }) => (
  <Layout>
    <HomePage>
      <Cover>
        <Title>
          <h1>Alan Shortis is a front end developer.</h1>
          <Link href="/about" passHref>
            <Label as="a">About &rarr;</Label>
          </Link>
        </Title>
      </Cover>
      <section>
        <PostList posts={posts} />
      </section>
    </HomePage>
  </Layout>
);

export default Home;
