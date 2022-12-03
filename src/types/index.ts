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

export interface DailyPost {
  day: string;
  date: string;
  title: string;
  mdxContent: Mdx;
  count: number;
}

export interface DailyList {
  dailies: DailyPost[];
  currentPage: string;
  totalPages: string;
  title?: string;
}

export interface Book {
  title: string;
  author: string;
  url: string;
}

export interface WebisteLink {
  name: string;
  url: string;
}

export interface AboutData {
  nowReading: Book;
  recentMusic: WebisteLink[];
}

export interface LatestContent {
  latestWritingPost: FrontMatter;
  selectedDailies: DailyPost[];
}
