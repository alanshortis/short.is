import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const FILE_EXTENSION = '.md';
const postsDirectory = path.join(process.cwd(), 'src/posts');

const getPosts = () => {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter(file => path.extname(file) === FILE_EXTENSION);

  const allPostsData = fileNames.map(filename => {
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath);

    return {
      slug: `writing/${path.basename(filename, FILE_EXTENSION)}`,
      ...matter(fileContents).data,
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

export default getPosts;
