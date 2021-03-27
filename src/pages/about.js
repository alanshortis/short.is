import getGoodreads from '../data/goodreads';

const About = ({ goodreads }) => {
  return <h1>About</h1>;
};

export async function getStaticProps() {
  return {
    props: {
      goodreads: await getGoodreads(),
    },
  };
}

export default About;
