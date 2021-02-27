import convert from 'xml-js';
import type Book from '../types/Book';

const getBooks = async (): Promise<Book[]> => {
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
    } as Book;
  });

  return reading;
};

export default getBooks;
