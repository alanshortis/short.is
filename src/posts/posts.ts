import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Post {
  title: string;
  date: string;
  slug: string;
  intro: string;
  updated?: string;
}

const postsDirectory = path.join(process.cwd(), 'src/posts');

const getPosts = (): Post[] => {
  const fileNames = fs.readdirSync(postsDirectory).filter(file => path.extname(file) === '.mdx');

  const allPostsData = fileNames.map(filename => {
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    return matter(fileContents).data;
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
