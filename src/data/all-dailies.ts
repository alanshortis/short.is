import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { DailyPost } from '../types';

const EXT = '.mdx';
const DAILY_DIR = path.join(process.cwd(), 'src/posts/daily');
const allDailyFileNames = fs.readdirSync(DAILY_DIR);

const fileContent = (fileName: string) => matter(fs.readFileSync(path.join(DAILY_DIR, fileName)));

// How many posts?
export const dailyCount = allDailyFileNames.length;

// How many per page?
export const PER_PAGE = 10;

// How many pages?
export const pageCount = Math.ceil(dailyCount / PER_PAGE);

// Posts are in files, named by the day. Strip the file extension and make a number.
export const postDays = allDailyFileNames.map(fileName => Number(fileName.replace(EXT, '')));

// An array of posts in a range, with parsed MDX content.
// Using the offset and count args, can get a single post.
export const dailyPosts = async (offset = 0, count = PER_PAGE): Promise<DailyPost[]> => {
  // Sort the post days then slice to return just the range of posts we need.
  const postsInRange = postDays.sort((a, b) => b - a).slice(offset, offset + count);

  // Put the filename back together, get the front matter and content, return.
  const postContent = await Promise.all(
    postsInRange.map(async postDay => {
      const fileName = `${postDay.toString() + EXT}`;
      const { data, content } = fileContent(fileName);
      const { day, date } = data;
      const mdxContent = await serialize(content);

      return { day, date, mdxContent };
    })
  );

  return postContent;
};
