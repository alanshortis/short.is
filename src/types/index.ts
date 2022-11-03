import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Mdx = MDXRemoteSerializeResult<Record<string, unknown>>;

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
  mdxContent: Mdx;
  nextPost?: FrontMatter;
  prevPost?: FrontMatter;
}

export interface PostList {
  posts: FrontMatter[];
  years: string[];
}

export interface LatestContent {
  latestWritingPost: FrontMatter;
}

export interface DailyPost {
  day: string;
  date: string;
  mdxContent: Mdx;
  count: number;
}

export interface DailyList {
  dailies: DailyPost[];
  currentPage: string;
  totalPages: string;
  title?: string;
}
