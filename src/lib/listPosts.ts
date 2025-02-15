import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

interface Post {
  title: string;
  date: string;
  featured?: boolean;
  slug: string;
}

const FOLDER = 'src/posts';

export const listPosts = (): Array<Post> => {
  const posts = fs
    .readdirSync(FOLDER)
    .map(filename => {
      const file = path.join(process.cwd(), FOLDER, filename);
      const { data } = matter(fs.readFileSync(file));
      return {
        title: data.title,
        date: data.date,
        featured: data.featured,
        slug: filename.replace(/\.md$/, ''),
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter(post => new Date(post.date) <= new Date());

  return posts;
};
