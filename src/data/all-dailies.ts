import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { DailyPost } from '../types';

const DAILY_DIR = path.join(process.cwd(), 'src/posts/daily');
const allDailyFileNames = fs.readdirSync(DAILY_DIR);

const fileContent = (fileName: string) => matter(fs.readFileSync(path.join(DAILY_DIR, fileName)));

export const dailyCount = fs.readdirSync(DAILY_DIR).length;

export const allDailies = await Promise.all(
  allDailyFileNames.map(async (fileName): Promise<DailyPost> => {
    const { data, content } = fileContent(fileName);
    const { title, date } = data;
    const mdxContent = await serialize(content);

    return {
      title,
      date,
      mdxContent,
    };
  })
);
