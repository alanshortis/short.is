import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const FILE_EXTENSION = '.mdx';
const POSTS_DIR = path.join(process.cwd(), 'src/posts');

const postFileContents = slug => {
  const fullPath = path.join(POSTS_DIR, `${slug}${FILE_EXTENSION}`);
  return fs.readFileSync(fullPath);
};

export const getPostList = () => {
  const fileNames = fs.readdirSync(POSTS_DIR).filter(file => path.extname(file) === FILE_EXTENSION);
  const slugs = fileNames.map(name => path.basename(name, FILE_EXTENSION));

  const allPostsData = slugs.map(filename => {
    return {
      slug: `writing/${path.basename(filename, FILE_EXTENSION)}`,
      ...matter(postFileContents(filename)).data,
    };
  });

  const sortedPosts = allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    }
    return -1;
  });

  return sortedPosts;
};

export const allPostSlugs = getPostList().map(post => post.slug);

export const getPostContent = slug => {
  return matter(postFileContents(slug));
};
