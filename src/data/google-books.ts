import type { Book } from '../types';

export const googleBooks = async (): Promise<Book> => {
  // const data = await fetch(
  //   'https://www.googleapis.com/books/v1/users/113589407271274800797/bookshelves/3/volumes?key=AIzaSyDgwclVlqtorg_LK1LXNuWtRZUZbsWVI44'
  // ).then(response => response.json());

  const response = await fetch(
    'https://www.googleapis.com/books/v1/users/113589407271274800797/bookshelves/3/volumes?key=AIzaSyDgwclVlqtorg_LK1LXNuWtRZUZbsWVI44'
  );
  const data = await response.json();

  const { volumeInfo } = data.items[0];

  return {
    title: volumeInfo.title,
    author: volumeInfo.authors[0],
    url: volumeInfo.previewLink,
  };
};
