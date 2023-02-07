import path from 'path';
import fs from 'fs';
import matter, { type GrayMatterFile } from 'gray-matter';

export interface DailyPost {
  day: string;
  date: string;
  title: string;
  content: string;
  postCount?: number;
}

export interface DailyList {
  dailies: DailyPost[];
  currentPage: number;
  totalPages: number;
}

const FOLDER = 'src/data/posts';
export const PER_PAGE = 7;
export const postCount = fs.readdirSync(FOLDER).length;
export const postDays = Array.from({ length: postCount }, (_, i) => i + 1).reverse();
export const pageCount = Math.ceil(postCount / PER_PAGE);

const fileContent = (dir: string, fileName: string): GrayMatterFile<Buffer> => {
  const content = matter(fs.readFileSync(path.join(dir, fileName)));
  return content;
};

export const getDailyPosts = async (offset = 0, limit = PER_PAGE): Promise<DailyPost[]> => {
  const postsInRange = postDays.slice(offset, offset + limit);

  const postContent = await Promise.all(
    postsInRange.map(async postDay => {
      const fileName = `${postDay + '.md'}`;
      const { data, content } = fileContent(path.join(process.cwd(), FOLDER), fileName);
      const { day, date, title } = data;

      return { day, date, title, content };
    })
  );

  return postContent;
};
