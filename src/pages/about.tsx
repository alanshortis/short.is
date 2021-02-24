import Reading from '../components/Reading';
import Layout from '../components/Layout';
import getBooks from '../data/books';
import type Book from '../types/Book';
import type Meta from '../types/Meta';

interface Props {
  meta: Meta;
  reading: [Book];
}

const About: React.FC<Props> = ({ meta, reading }) => {
  return (
    <Layout title="About" meta={meta}>
      <h1>About</h1>
      <Reading reading={reading} />
    </Layout>
  );
};

export const config = {
  unstable_runtimeJS: false,
};

export async function getStaticProps() {
  const reading = await getBooks();

  return {
    props: {
      reading,
    },
  };
}

export default About;
