import path from 'path';
import type { Post, FrontMatter } from '../types';
import { writingSlugs } from './writing-slugs';
import { fileContent, EXT, mdxSerialize } from './post-utils';

const WRITING_DIR = path.join(process.cwd(), 'src/posts/writing');
const postSlugs = [...writingSlugs];

export const allWritingFrontMatter: FrontMatter[] = postSlugs.map((slug): FrontMatter => {
  const { data } = fileContent(WRITING_DIR, slug + EXT);

  return {
    ...(data as FrontMatter),
    slug,
    year: data.date.substring(0, 4),
  };
});

export const writingYears = allWritingFrontMatter
  .map(post => post.year)
  .filter((year, idx, arr) => arr.indexOf(year) === idx);

export const latestWriting: FrontMatter = allWritingFrontMatter[0];

export const writingContent = async (slug: string): Promise<Post> => {
  const thisPost = allWritingFrontMatter.findIndex(post => post.slug === slug);
  const mdxContent = await mdxSerialize(WRITING_DIR, slug);

  return {
    ...(allWritingFrontMatter[thisPost] as FrontMatter),
    mdxContent,
    nextPost: allWritingFrontMatter[thisPost - 1] || null,
    prevPost: allWritingFrontMatter[thisPost + 1] || null,
  };
};
