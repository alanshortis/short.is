import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { FrontMatter } from '../types/FrontMatter';
import type { Post } from '../types/Post';

const EXT = '.mdx';
const POSTS_DIR = path.join(process.cwd(), 'src/posts');
const allPostFileNames = fs.readdirSync(POSTS_DIR).filter(file => path.extname(file) === EXT);

// The parsed file contents (front matter and post body).
const fileContent = (fileName: string) => matter(fs.readFileSync(path.join(POSTS_DIR, fileName)));

// The front matter of all posts.
export const allPostsFrontMatter: FrontMatter[] = allPostFileNames
  .map(
    (fileName): FrontMatter => ({
      ...(fileContent(fileName).data as FrontMatter),
      slug: path.basename(fileName, EXT),
    })
  )
  .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

// The front matter for the requested post, next and previous posts, and the content.
export const postContent = (fileName: string): Post => {
  const slug = path.basename(fileName, EXT);
  const thisPost = allPostsFrontMatter.findIndex(post => post.slug === slug);

  return {
    ...(allPostsFrontMatter[thisPost] as FrontMatter),
    content: 'test',
    nextPost: allPostsFrontMatter[thisPost - 1] || null,
    prevPost: allPostsFrontMatter[thisPost + 1] || null,
  };
};

console.log(postContent('setting-up-a-new-mac.mdx'));
