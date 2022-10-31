import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import highlight from 'remark-highlight.js';

export const EXT = '.mdx';

export const fileContent = (dir: string, fileName: string) =>
  matter(fs.readFileSync(path.join(dir, fileName)));

export const mdxSerialize = async (dir: string, slug: string) => {
  const content = await serialize(fileContent(dir, `${slug}${EXT}`).content, {
    mdxOptions: {
      // I don't know why it's upset about the remark plugins, and I don't care at this point.
      // @ts-ignore
      remarkPlugins: [highlight],
    },
  });

  return content;
};

// TODO: - Serialize into daily.
//       - Post generator add to post slug array.
