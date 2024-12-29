import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

interface Post {
  title: string;
  date: string;
  content: string;
  showAgeWarning: boolean;
}

const FOLDER = 'src/posts';

export const getPost = (slug: string): Post => {
  const file = path.join(process.cwd(), FOLDER, `${slug}.md`);
  const { data, content } = matter(fs.readFileSync(file));
  const { title, date, showAgeWarning } = data;

  const daysSince = Math.abs(
    Math.round((new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
  );

  console.log(showAgeWarning);

  return {
    title: title,
    date: date,
    content,
    showAgeWarning: daysSince > 730 && showAgeWarning,
  };
};
