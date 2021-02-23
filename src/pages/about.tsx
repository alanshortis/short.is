import Layout from '../components/Layout';
import Reading from '../components/Reading';
import { goodreads } from '../data';
import type { Meta, Book } from '../types';

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
  const reading = await goodreads();

  return {
    props: {
      reading,
    },
  };
}

export default About;
