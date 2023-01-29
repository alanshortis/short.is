import * as cheerio from 'cheerio';

export interface GoodreadsBook {
  author: string;
  title: string;
  url: string;
}

export const getGoodreads = async (): Promise<GoodreadsBook[]> => {
  if (process.env.OFFLINE === '1') {
    return [
      { author: 'George Orwell', title: 'Down and out in Paris and London', url: '/g' },
      { author: 'Naomi Klien', title: 'The Shock Doctrine', url: '/n' },
    ];
  }

  const res = await fetch(`https://www.goodreads.com/user/show/${process.env.GOODREADS_USER}`);
  const data = await res.text();
  const $ = cheerio.load(data);

  const updates = $('.Updates');
  const bookData = [];

  for (let i = 0; i < updates.length; i++) {
    bookData.push({
      author: $(updates[i]).find('.authorName').text(),
      title: $(updates[i]).find('.bookTitle').text(),
      url: `https://www.goodreads.com${$(updates[i]).find('.bookTitle').attr('href')}`,
    });
  }

  return bookData as GoodreadsBook[];
};
