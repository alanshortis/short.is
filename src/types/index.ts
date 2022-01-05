import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface HeadInfo {
  title?: string;
  intro?: string;
}

export type MenuItem = {
  title: string;
  path: string;
};

export interface FrontMatter {
  title: string;
  date: string;
  intro: string;
  slug: string;
  year?: string;
}

export interface Post extends FrontMatter {
  content: string;
  mdxContent: MDXRemoteSerializeResult<Record<string, unknown>>;
  nextPost?: FrontMatter;
  prevPost?: FrontMatter;
}

export interface PostList {
  posts: FrontMatter[];
  years: string[];
}

export interface LatestContent {
  latestWriting: FrontMatter;
}
