import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const EXT = '.mdx';
const POSTS_DIR = path.join(process.cwd(), 'src/posts');
const allPostFiles = fs.readdirSync(POSTS_DIR).filter(file => path.extname(file) === EXT);
const postCount = allPostFiles.length;

// All post slugs.
export const allPostSlugs = allPostFiles.map(post => path.basename(post, EXT));

// Full content of each post file.
export const postFileContents = slug => {
  const fullPath = path.join(POSTS_DIR, slug);
  return matter(fs.readFileSync(fullPath));
};

// All post front matter, sorted, with computed values.
export const allPostFrontMatter = allPostFiles
  .map(file => ({ ...postFileContents(file).data, slug: path.basename(file, EXT) }))
  .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
  .map((post, i) => ({
    ...post,
    nextPostSlug: i === 0 ? null : allPostSlugs[i - 1],
    prevPostSlug: i === postCount - 1 ? null : allPostSlugs[i + 1],
  }));

// The post content with all front maatter.
export const postContent = slug => {
  return {
    content: postFileContents(`${slug}${EXT}`).content,
    frontMatter: allPostFrontMatter.find(post => post.slug === slug),
  };
};
