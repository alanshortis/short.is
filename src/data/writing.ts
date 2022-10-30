import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import highlight from 'remark-highlight.js';
import type { Post, FrontMatter } from '../types';
import { writingSlugs } from './writing-slugs';

const EXT = '.mdx';
const WRITING_DIR = path.join(process.cwd(), 'src/posts/writing');

// The parsed file contents (front matter and post body).
const fileContent = (fileName: string) => matter(fs.readFileSync(path.join(WRITING_DIR, fileName)));

const postSlugs = [...writingSlugs];

// The front matter of all posts.
export const allWritingFrontMatter: FrontMatter[] = postSlugs.map((slug): FrontMatter => {
  const { data } = fileContent(slug + EXT);

  return {
    ...(data as FrontMatter),
    slug,
    year: data.date.substring(0, 4),
  };
});

// What years have a post been made?
export const writingYears = allWritingFrontMatter
  .map(post => post.year)
  .filter((year, idx, arr) => arr.indexOf(year) === idx);

// Just the latest post, please.
export const latestWriting: FrontMatter = allWritingFrontMatter[0];

// The full content for the requested, next, and previous posts.
export const writingContent = async (slug: string): Promise<Post> => {
  const thisPost = allWritingFrontMatter.findIndex(post => post.slug === slug);
  const mdxContent = await serialize(fileContent(`${slug}${EXT}`).content, {
    mdxOptions: {
      // I don't know why it's upset about the remark plugins, and I don't care at this point.
      // @ts-ignore
      remarkPlugins: [highlight],
    },
  });

  return {
    ...(allWritingFrontMatter[thisPost] as FrontMatter),
    mdxContent,
    nextPost: allWritingFrontMatter[thisPost - 1] || null,
    prevPost: allWritingFrontMatter[thisPost + 1] || null,
  };
};
