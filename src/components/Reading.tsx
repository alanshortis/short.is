import { Fragment } from 'react';
import type Book from '../types/Book';

interface ReadingProps {
  reading: [Book];
}

const Reading: React.FC<ReadingProps> = ({ reading }) => {
  const bookCount = reading.length;

  if (bookCount > 1) {
    return (
      <>
        {reading.map((book, i) => (
          <Fragment key={book.url}>
            {i !== 0 && ', '}
            {i + 1 === bookCount && 'and '}
            <a href={book.url}>{book.title}</a> by {book.author}
          </Fragment>
        ))}
      </>
    );
  }

  const { url, title, author } = reading[0];
  return (
    <>
      <a href={url}>{title}</a> by {author}
    </>
  );
};

export default Reading;
