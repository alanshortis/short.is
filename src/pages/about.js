import getGoodreads from '../data/goodreads';
import { Goodreads, Layout } from '../components';

export async function getStaticProps() {
  return {
    props: {
      goodreads: await getGoodreads(),
    },
  };
}

const About = ({ goodreads, meta }) => (
  <Layout title="About" meta={meta}>
    <Goodreads goodreads={goodreads} />
  </Layout>
);

export default About;
