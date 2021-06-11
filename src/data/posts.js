import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const EXT = '.mdx';
const POSTS_DIR = path.join(process.cwd(), 'src/posts');
const allPostFiles = fs.readdirSync(POSTS_DIR).filter(file => path.extname(file) === EXT);
const postCount = allPostFiles.length;

// Full content of each post file.
const postFileContent = slug => {
  const fullPath = path.join(POSTS_DIR, slug);
  return matter(fs.readFileSync(fullPath));
};

// All post front matter, sorted, with computed values.
export const allPostFrontMatter = allPostFiles
  .map(file => ({ ...postFileContent(file).data, slug: path.basename(file, EXT) }))
  .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1))
  .map((post, idx, arr) => ({
    ...post,
    nextPostSlug: idx === 0 ? null : arr[idx - 1].slug,
    prevPostSlug: idx === postCount - 1 ? null : arr[idx + 1].slug,
  }));

// Front matter for a specific post.
const postFrontMatter = slug => allPostFrontMatter.find(post => post.slug === slug);

// The post content with all front maatter.
export const postContent = slug => {
  const { content } = postFileContent(`${slug}${EXT}`);
  const frontMatter = postFrontMatter(slug);

  return {
    content,
    frontMatter,
    nextPost: postFrontMatter(frontMatter.nextPostSlug) || null,
    prevPost: postFrontMatter(frontMatter.prevPostSlug) || null,
  };
};
