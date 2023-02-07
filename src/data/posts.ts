import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export interface DailyPost {
  day: string;
  date: string;
  title: string;
  content: string;
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

export const getDailyPosts = (offset = 0, limit = PER_PAGE): DailyPost[] => {
  const postsInRange = postDays.slice(offset, offset + limit);

  const postContent = postsInRange.map(postDay => {
    const file = path.join(process.cwd(), FOLDER, `${postDay + '.md'}`);
    const { data, content } = matter(fs.readFileSync(file));
    const { day, date, title } = data;

    return { day, date, title, content };
  });

  return postContent;
};
