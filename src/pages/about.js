import getGoodreads from '../data/goodreads';
import { Goodreads } from '../components';

const About = ({ goodreads }) => {
  return (
    <>
      <h1>About</h1>
      <h2>Now</h2>
      <ul>
        <li>
          <Goodreads goodreads={goodreads} />
        </li>
      </ul>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      goodreads: await getGoodreads(),
    },
  };
}

export default About;
