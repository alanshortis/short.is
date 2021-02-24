import convert from 'xml-js';
import { Layout, Reading } from '../components';
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
  const res = await fetch(
    `https://www.goodreads.com/review/list?v=2&id=${process.env.GOODREADS_USER}&shelf=currently-reading&key=${process.env.GOODREADS_KEY}`
  );
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
