import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { DailyPost } from '../types';
import { dailyDays } from './daily-days';
import { fileContent, EXT } from './post-utils';

const DAILY_DIR = path.join(process.cwd(), 'src/posts/daily');

export const postDays = [...dailyDays];
export const dailyCount = postDays.length;
export const PER_PAGE = 10;
export const pageCount = Math.ceil(dailyCount / PER_PAGE);

export const dailyPosts = async (offset = 0, count = PER_PAGE): Promise<DailyPost[]> => {
  const postsInRange = postDays.slice(offset, offset + count);

  const postContent = await Promise.all(
    postsInRange.map(async postDay => {
      const fileName = `${postDay.toString() + EXT}`;
      const { data, content } = fileContent(DAILY_DIR, fileName);
      const { day, date } = data;
      const mdxContent = await serialize(content);

      return { day, date, mdxContent };
    })
  );

  return postContent;
};
