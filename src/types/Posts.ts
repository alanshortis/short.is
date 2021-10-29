import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface FrontMatter {
  title: string;
  date: string;
  updated?: string;
  intro: string;
  slug: string;
}

export interface Post extends FrontMatter {
  content: string;
  mdxContent: MDXRemoteSerializeResult<Record<string, unknown>>;
  nextPost?: FrontMatter;
  prevPost?: FrontMatter;
}

export interface PostList {
  posts: FrontMatter[];
}
