import { useContext } from 'react';
import MetaContext from '../context/meta';
import { getGoodreads, getLastfm } from '../services';
import { A, Goodreads, Lastfm, Layout } from '../components';

export async function getStaticProps() {
  return {
    props: {
      goodreads: await getGoodreads(),
      lastfm: await getLastfm(),
    },
  };
}

const Home = ({ goodreads, lastfm }) => {
  const meta = useContext(MetaContext);

  return (
    <Layout>
      <h1>Alan Shortis</h1>
      <p>This is a home page, stripped of styles</p>
      <p>
        <Goodreads goodreads={goodreads} />
      </p>
      <p>
        <Lastfm lastfm={lastfm} />
      </p>
      <ul>
        {meta.social.map(social => (
          <li key={social.url}>
            <A href={social.url}>{social.name}</A>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;
