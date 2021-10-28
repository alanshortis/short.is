export interface FrontMatter {
  title: string;
  date: string;
  updated?: string;
  hasToc: boolean;
  intro: string;
  slug: string;
}

export interface Post extends FrontMatter {
  content: string;
  nextPost?: FrontMatter;
  prevPost?: FrontMatter;
}

export interface PostList {
  posts: FrontMatter[];
}
