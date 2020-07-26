const fetch = require('node-fetch');
const convert = require('xml-js');

const { GOODREADS_KEY, GOODREADS_USER } = process.env;

module.exports = async function () {
  return fetch(
    `https://www.goodreads.com/review/list?v=2&id=${GOODREADS_USER}&shelf=currently-reading&key=${GOODREADS_KEY}`
  )
    .then(res => res.text())
    .then(text => {
      const json = JSON.parse(convert.xml2json(text, { compact: true, spaces: 4 }));
      const { book } = json.GoodreadsResponse.reviews.review;

      return {
        author: book.authors.author.name._text,
        title: book.title._text,
        url: book.link._text,
      };
    });
};
