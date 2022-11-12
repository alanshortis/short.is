import type { Book } from '../types';

export const googleBooks = async (): Promise<Book> => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/users/${process.env.GOOGLE_BOOKS_USER}/bookshelves/3/volumes?key=${process.env.GOOGLE_BOOKS_KEY}`
  );
  const data = await res.json();

  const { volumeInfo } = data.items[0];
  const { title, previewLink: url } = volumeInfo;
  const [author] = volumeInfo.authors;

  return { title, author, url };
};
