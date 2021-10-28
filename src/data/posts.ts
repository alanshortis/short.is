import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface FrontMatter {
  title: string;
  date: string;
  updated?: string;
  hasToc: boolean;
  intro: string;
  slug: string;
}

const EXT = '.mdx';
const POSTS_DIR = path.join(process.cwd(), 'src/posts');
const allPostFileNames = fs.readdirSync(POSTS_DIR).filter(file => path.extname(file) === EXT);

const postContent = (slug: string) => matter(fs.readFileSync(path.join(POSTS_DIR, slug)));

export const allPostsFrontMatter = allPostFileNames
  .map(
    (file): FrontMatter => ({
      ...(postContent(file).data as FrontMatter),
      slug: path.basename(file, EXT),
    })
  )
  .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
