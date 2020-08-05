const fetch = require('node-fetch');
const convert = require('xml-js');
const { GOODREADS_KEY, GOODREADS_USER } = process.env;

const bookTemplate = (link, title, author) =>
  `<a href="${link}" target="_blank" rel="noopener noreferrer">${title}</a> by ${author}`;

module.exports = async function () {
  return fetch(
    `https://www.goodreads.com/review/list?v=2&id=${GOODREADS_USER}&shelf=currently-reading&key=${GOODREADS_KEY}`
  )
    .then(res => res.text())
    .then(text => {
      const json = JSON.parse(convert.xml2json(text, { compact: true, spaces: 4 }));
      const { review } = json.GoodreadsResponse.reviews;

      if (Array.isArray(review)) {
        let nowReading = '';
        const bookCount = review.length;

        review.map(({ book }, i) => {
          if (i !== 0) {
            nowReading += ', ';
          }

          if (bookCount === i + 1) {
            nowReading += 'and ';
          }

          nowReading += bookTemplate(
            book.link._text,
            book.title._text,
            book.authors.author.name._text
          );
        });

        return nowReading;
      }

      const { link, title, authors } = review.book;
      return bookTemplate(link._text, title._text, authors.author.name._text);
    });
};
