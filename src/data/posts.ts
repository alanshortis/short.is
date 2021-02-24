import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Post } from '../types';

const postsDirectory = path.join(process.cwd(), 'src/posts');

const getPosts = (): Post[] => {
  const fileNames = fs.readdirSync(postsDirectory).filter(file => path.extname(file) === '.mdx');

  const allPostsData = fileNames.map(filename => {
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath);

    return matter(fileContents).data as Post;
  });

  const sortedPosts = allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    }
    return -1;
  });

  return sortedPosts;
};

export default getPosts;
