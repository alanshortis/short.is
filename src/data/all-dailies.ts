import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

// const EXT = '.mdx';
const DAILY_DIR = path.join(process.cwd(), 'src/posts/daily/2022/08');
const allDailyFileNames = fs.readdirSync(DAILY_DIR);

const fileContent = (fileName: string) => matter(fs.readFileSync(path.join(DAILY_DIR, fileName)));

export const allDailies = await Promise.all(
  allDailyFileNames.map(async fileName => {
    const { data, content } = fileContent(fileName);
    const { title, date } = data;
    const mdxContent = await serialize(content);

    return {
      title,
      date,
      content,
      mdxContent,
    };
  })
);
