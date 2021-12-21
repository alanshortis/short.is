/* eslint-disable camelcase */
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

export interface Photo {
  id: string;
  url: string;
  camera: string;
  film: string;
  lens?: string;
}

export interface PhotoList {
  photos: Photo[];
}

export interface CloudinaryResponse {
  public_id: string;
  secure_url: string;
  context: {
    custom: {
      camera: string;
      film: string;
      lens?: string;
    };
  };
}
