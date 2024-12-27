import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

interface Post {
  title: string;
  date: string;
  content: string;
}

const FOLDER = 'src/posts';

export const getPost = (slug: string): Post => {
  const file = path.join(process.cwd(), FOLDER, `${slug}.md`);
  const { data, content } = matter(fs.readFileSync(file));

  return {
    title: data.title,
    date: data.date,
    content,
  };
};
