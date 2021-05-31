import styled from 'styled-components';
import { allPostFrontMatter } from '../data/posts';
import getGoodreads from '../data/goodreads';
import { About, Layout, PostList } from '../components';

export async function getStaticProps() {
  return {
    props: {
      posts: allPostFrontMatter,
      goodreads: await getGoodreads(),
    },
  };
}

export const config = {
  unstable_runtimeJS: false,
};

const Level = styled.div`
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
  height: calc(50vh - ${p => p.theme.headerHeight});
  padding: ${p => p.theme.spacing};
  scroll-margin-top: calc(${p => p.theme.headerHeight});
  @media ${p => p.theme.media.medium} {
    height: calc(100vh - ${p => p.theme.headerHeight});
    position: sticky;
    top: ${p => p.theme.headerHeight};
  }
`;

const Home = ({ meta, posts, goodreads }) => (
  <Layout meta={meta}>
    <Level>
      <Cover>
        <h1>Alan Shortis is a front end developer.</h1>
        <a href="#about">Who?</a>
      </Cover>
      <section>
        <PostList posts={posts} />
      </section>
    </Level>
    <Level>
      <Cover id="about">
        <h2>About</h2>
      </Cover>
      <section>
        <About goodreads={goodreads} />
      </section>
    </Level>
  </Layout>
);

export default Home;
