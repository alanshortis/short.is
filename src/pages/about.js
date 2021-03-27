import PropTypes from 'prop-types';
import getGoodreads from '../data/goodreads';
import { Goodreads, Layout } from '../components';

const About = ({ goodreads, meta }) => {
  return (
    <Layout meta={meta} title="About">
      <h1>About</h1>
      <h2>Now</h2>
      <ul>
        <li>
          <Goodreads goodreads={goodreads} />
        </li>
      </ul>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      goodreads: await getGoodreads(),
    },
  };
}

About.propTypes = {
  goodreads: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
  meta: PropTypes.shape({
    description: PropTypes.string,
    title: PropTypes.string,
    twitter: PropTypes.string,
    url: PropTypes.string,
    year: PropTypes.number,
  }).isRequired,
};

export default About;
