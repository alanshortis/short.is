import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { DailyPost } from '../types';

const EXT = '.mdx';
const DAILY_DIR = path.join(process.cwd(), 'src/posts/daily');
const allDailyFileNames = fs.readdirSync(DAILY_DIR);

const fileContent = (fileName: string) => matter(fs.readFileSync(path.join(DAILY_DIR, fileName)));

// How many?
export const dailyCount = fs.readdirSync(DAILY_DIR).length;

// Every daily post, please.
export const allDailies = await Promise.all(
  allDailyFileNames.map(async (fileName): Promise<Omit<DailyPost, 'content'>> => {
    const { data, content } = fileContent(fileName);
    const { day, date } = data;
    const mdxContent = await serialize(content);

    return {
      day,
      date,
      mdxContent,
    };
  })
);

// Just the requested post's frontmatter and content.
export const dailyContent = (day: string): Omit<DailyPost, 'mdxContent'> => {
  const thisPost = allDailies.findIndex(daily => daily.day === day);

  return {
    ...(allDailies[thisPost] as DailyPost),
    content: fileContent(`${day}${EXT}`).content,
  };
};
