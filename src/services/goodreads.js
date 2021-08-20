import convert from 'xml-js';

const getGoodreads = async () => {
  const res = await fetch(
    `https://www.goodreads.com/review/list?v=2&id=${process.env.GOODREADS_USER}&shelf=currently-reading&key=${process.env.GOODREADS_KEY}`
  );

  // The goodreads API deals in XML, so we have to convert it.
  const text = await res.text();
  const json = JSON.parse(convert.xml2json(text, { compact: true }));
  const { review } = json.GoodreadsResponse.reviews;

  // The goodreads API only gives us an array if it returns more
  // then one book, so we need to put a single book into an array
  // so it's easier to handle later on.
  const books = Array.isArray(review) ? review : [review];

  const reading = books.map(({ book }) => {
    return {
      url: book.link._text,
      title: book.title._text,
      author: book.authors.author.name._text,
    };
  });

  return reading;
};

export default getGoodreads;
