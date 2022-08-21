import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { DailyPost } from '../types';

// const EXT = '.mdx';
const DAILY_DIR = path.join(process.cwd(), 'src/posts/daily/2022/08');
const allDailyFileNames = fs.readdirSync(DAILY_DIR);

const fileContent = (fileName: string) => matter(fs.readFileSync(path.join(DAILY_DIR, fileName)));

// All dailies in full.
export const allDailies: DailyPost[] = allDailyFileNames
  .map((fileName): DailyPost => {
    const { data, content } = fileContent(fileName);

    return {
      date: data.date,
      content,
    };
  })
  .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
