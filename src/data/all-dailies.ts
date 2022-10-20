import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { DailyPost } from '../types';

const EXT = '.mdx';
const DAILY_DIR = path.join(process.cwd(), 'src/posts/daily');
const PER_PAGE = 25;
const allDailyFileNames = fs.readdirSync(DAILY_DIR);

const fileContent = (fileName: string) => matter(fs.readFileSync(path.join(DAILY_DIR, fileName)));

// How many posts?
export const dailyCount = fs.readdirSync(DAILY_DIR).length;

// How many pages?
export const pageCount = dailyCount / PER_PAGE;

// Every daily post, please.
// export const allDailies = await Promise.all(
//   allDailyFileNames.map(async (fileName): Promise<Omit<DailyPost, 'content'>> => {
//     const { data, content } = fileContent(fileName);
//     const { day, date } = data;
//     const mdxContent = await serialize(content);

//     return {
//       day,
//       date,
//       mdxContent,
//     };
//   })
// );

export const allDailies = (offset = 0, count = PER_PAGE): Array<unknown> => {
  const posts = allDailyFileNames
    .map(fileName => {
      const { data } = fileContent(fileName);
      const { day, date } = data;

      return { day, date };
    })
    .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

  const postsSubset = posts.slice(offset, offset + count);

  return postsSubset;
};

// Just the requested post's frontmatter and content.
// export const dailyContent = (day: string): Omit<DailyPost, 'mdxContent'> => {
//   const thisPost = allDailies.findIndex(daily => daily.day === day);

//   return {
//     ...(allDailies[thisPost] as DailyPost),
//     content: fileContent(`${day}${EXT}`).content,
//   };
// };

// TODO (test after each step)
// - Change `allDailies` to a function.
// - Sort the posts that are returned in this function.
// - Accept an argument for the first post (by 'day') to return.
// - Accept an argument for the number of posts to return.
// - Replace `dailyContent` with the `allDailies` function, using the args to get one post.
// - Remove serialise from the view.
