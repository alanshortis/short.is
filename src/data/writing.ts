import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Post, FrontMatter } from '../types';

const EXT = '.mdx';
const POSTS_DIR = path.join(process.cwd(), 'src/posts/writing');
const allPostFileNames = fs.readdirSync(POSTS_DIR).filter(file => path.extname(file) === EXT);

// The parsed file contents (front matter and post body).
const fileContent = (fileName: string) => matter(fs.readFileSync(path.join(POSTS_DIR, fileName)));

// The front matter of all posts.
export const allPostsFrontMatter: FrontMatter[] = allPostFileNames
  .map((fileName): FrontMatter => {
    const { data } = fileContent(fileName);

    return {
      ...(data as FrontMatter),
      slug: path.basename(fileName, EXT),
      year: data.date.substring(0, 4),
    };
  })
  .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

// What years have a post been made?
export const postYears = allPostsFrontMatter
  .map(post => post.year)
  .filter((year, idx, arr) => arr.indexOf(year) === idx) as string[];

// Just the latest post, please.
export const latestPost: FrontMatter = allPostsFrontMatter[0];

// The front matter for the requested, next, and previous posts, and the content.
export const postContent = (slug: string): Omit<Post, 'mdxContent'> => {
  const thisPost = allPostsFrontMatter.findIndex(post => post.slug === slug);

  return {
    ...(allPostsFrontMatter[thisPost] as FrontMatter),
    content: fileContent(`${slug}${EXT}`).content,
    nextPost: allPostsFrontMatter[thisPost - 1] || null,
    prevPost: allPostsFrontMatter[thisPost + 1] || null,
  };
};
