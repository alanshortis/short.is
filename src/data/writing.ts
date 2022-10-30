import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Post, FrontMatter } from '../types';

const EXT = '.mdx';
const WRITING_DIR = path.join(process.cwd(), 'src/posts/writing');
const writingFileNames = fs.readdirSync(WRITING_DIR).filter(file => path.extname(file) === EXT);

// The parsed file contents (front matter and post body).
const fileContent = (fileName: string) => matter(fs.readFileSync(path.join(WRITING_DIR, fileName)));

// The front matter of all posts.
export const allWritingFrontMatter: FrontMatter[] = writingFileNames
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
export const writingYears = allWritingFrontMatter
  .map(post => post.year)
  .filter((year, idx, arr) => arr.indexOf(year) === idx) as string[];

// Just the latest post, please.
export const latestWriting: FrontMatter = allWritingFrontMatter[0];

// The front matter for the requested, next, and previous posts, and the content.
export const writingContent = (slug: string): Omit<Post, 'mdxContent'> => {
  const thisPost = allWritingFrontMatter.findIndex(post => post.slug === slug);

  return {
    ...(allWritingFrontMatter[thisPost] as FrontMatter),
    content: fileContent(`${slug}${EXT}`).content,
    nextPost: allWritingFrontMatter[thisPost - 1] || null,
    prevPost: allWritingFrontMatter[thisPost + 1] || null,
  };
};
