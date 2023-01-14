import type { Book } from '../types';

type VolumeInfo = {
  volumeInfo: {
    title: string;
    authors: string[];
    previewLink: string;
  };
};

const isOffline = process.env.OFFLINE === 'offline';

const mock: Book[] = [{ title: 'Some book', author: 'Some writer', url: '/' }];

export const googleBooks = async (): Promise<Book[]> => {
  if (isOffline) return mock;

  const res = await fetch(
    `https://www.googleapis.com/books/v1/users/${process.env.GOOGLE_BOOKS_USER}/bookshelves/3/volumes?key=${process.env.GOOGLE_BOOKS_KEY}`
  );
  const { items } = await res.json();

  const volumes = items.map(({ volumeInfo }: VolumeInfo) => ({
    title: volumeInfo.title,
    author: volumeInfo.authors[0],
    url: volumeInfo.previewLink,
  }));

  return volumes;
};
