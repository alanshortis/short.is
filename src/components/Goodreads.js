import { Fragment } from 'react';
import PropTypes from 'prop-types';

const Goodreads = ({ goodreads }) => {
  const bookCount = goodreads.length;

  return (
    <>
      {goodreads.map((book, i) => {
        const { url, title, author } = book;
        return (
          <Fragment key={url}>
            {i !== 0 && ', '}
            {i + 1 === bookCount && i !== 0 && 'and '}
            <a href={url}>{title}</a> by {author}
          </Fragment>
        );
      })}
    </>
  );
};

Goodreads.propTypes = {
  goodreads: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
};

export default Goodreads;
