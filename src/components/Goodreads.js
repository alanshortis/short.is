import { Fragment } from 'react';
import { A } from '../components';

const Goodreads = ({ goodreads }) => {
  const bookCount = goodreads.length;

  return (
    <span>
      Reading{' '}
      {goodreads.map((book, idx) => (
        <Fragment key={book.url}>
          {idx !== 0 && ', '}
          {idx + 1 === bookCount && idx !== 0 && 'and '}
          <A href={book.url}>{book.title}</A> by {book.author}
        </Fragment>
      ))}
    </span>
  );
};

export default Goodreads;
