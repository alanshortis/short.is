import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import highlight from 'remark-highlight.js';
import { Mdx } from '../types';

export const EXT = '.mdx';

export const fileContent = (dir: string, fileName: string): GrayMatterFile<Buffer> => {
  const content = matter(fs.readFileSync(path.join(dir, fileName)));
  return content;
};

export const mdxSerialize = async (content: string): Promise<Mdx> => {
  const mdxContent = await serialize(content, {
    mdxOptions: {
      // I don't know why it's upset about the remark plugins, and I don't care at this point.
      // @ts-ignore
      remarkPlugins: [highlight],
    },
  });

  return mdxContent;
};
