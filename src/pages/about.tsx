import convert from 'xml-js';
import Layout from '../components/Layout';
import Reading from '../components/Reading';
import type { Meta } from '../data/meta';
import type Book from '../types/Book';

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
  const res = await fetch(process.env.GOODREADS_URL);
  const text = await res.text();
  const json = JSON.parse(convert.xml2json(text, { compact: true }));
  const { review } = json.GoodreadsResponse.reviews;
  const books = Array.isArray(review) ? review : [review];

  const reading = books.map(({ book }) => {
    return {
      url: book.link._text,
      title: book.title._text,
      author: book.authors.author.name._text,
    };
  });

  return {
    props: {
      reading,
    },
  };
}

export default About;
