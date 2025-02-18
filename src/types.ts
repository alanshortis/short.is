export type Headings = Array<{
  depth: number;
  slug: string;
  text: string;
}>;

export type PostFrontMatter = {
  title: string;
  pubDate: string;
  description?: string;
  featured?: boolean;
};

export type Post = {
  frontmatter: PostFrontMatter;
  file: string;
  url: string;
};
