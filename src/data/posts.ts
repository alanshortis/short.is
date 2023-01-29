import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import path from 'path';
import fs from 'fs';
import matter, { type GrayMatterFile } from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { postDays } from './post-days';

type Mdx = MDXRemoteSerializeResult<Record<string, unknown>>;

interface DailyPost {
  day: string;
  date: string;
  title: string;
  mdxContent: Mdx;
  postCount: number;
}

export interface DailyList {
  dailies: DailyPost[];
  currentPage: string;
  totalPages: string;
  title?: string;
}

const days = [...postDays];
const EXT = '.mdx';
const DAILY_DIR = path.join(process.cwd(), 'src/data/posts');
export const postCount = days.length;
export const PER_PAGE = 7;
export const pageCount = Math.ceil(postCount / PER_PAGE);

const fileContent = (dir: string, fileName: string): GrayMatterFile<Buffer> => {
  const content = matter(fs.readFileSync(path.join(dir, fileName)));
  return content;
};

const mdxSerialize = async (content: string): Promise<Mdx> => {
  const mdxContent = await serialize(content);

  return mdxContent;
};

export const getDailyPosts = async (offset = 0, limit = PER_PAGE): Promise<DailyPost[]> => {
  const postsInRange = days.slice(offset, offset + limit);

  const postContent = await Promise.all(
    postsInRange.map(async postDay => {
      const fileName = `${postDay.toString() + EXT}`;
      const { data, content } = fileContent(DAILY_DIR, fileName);
      const { day, date, title } = data;
      const mdxContent = await mdxSerialize(content);

      return { day, date, title, mdxContent, postCount };
    })
  );

  return postContent;
};
