import { Fragment } from 'react';
import type Book from '../types/Book';

interface Props {
  reading: [Book];
}

const BookLink: React.FC<Book> = ({ url, title, author }) => (
  <>
    <a href={url}>{title}</a> by {author}
  </>
);

const Reading: React.FC<Props> = ({ reading }) => {
  const bookCount = reading.length;

  return (
    <>
      {reading.map((book, i) => {
        const { url, title, author } = book;
        return (
          <Fragment key={url}>
            {i !== 0 && ', '}
            {i + 1 === bookCount && i !== 0 && 'and '}
            <BookLink url={url} title={title} author={author} />
          </Fragment>
        );
      })}
    </>
  );
};

export default Reading;
