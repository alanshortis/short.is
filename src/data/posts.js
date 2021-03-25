import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const FILE_EXTENSION = '.md';
const POSTS_DIR = path.join(process.cwd(), 'src/posts');

const postFileContents = slug => {
  const fullPath = path.join(POSTS_DIR, `${slug}${FILE_EXTENSION}`);
  return fs.readFileSync(fullPath);
};

export const allPostSlugs = () => {
  const fileNames = fs.readdirSync(POSTS_DIR).filter(file => path.extname(file) === FILE_EXTENSION);
  return fileNames.map(name => path.basename(name, FILE_EXTENSION));
};

export const getPostList = () => {
  const fileNames = allPostSlugs();

  const allPostsData = fileNames.map(filename => {
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

export const getPostContent = slug => {
  return matter(postFileContents(slug));
};
