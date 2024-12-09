import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

interface Post {
  title: string;
  date: string;
  slug: string;
  content: string;
}

const FOLDER = 'src/posts';

export const listPosts = (): Array<Post> => {
  const posts = fs
    .readdirSync(FOLDER)
    .map(filename => {
      const file = path.join(process.cwd(), FOLDER, filename);
      const { data, content } = matter(fs.readFileSync(file));
      return {
        title: data.title,
        date: data.date,
        slug: filename.replace(/\.md$/, ''),
        content,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  return posts;
};
