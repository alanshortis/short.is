import { FrontMatter } from './FrontMatter';

export interface Post extends FrontMatter {
  content: string;
  nextPost: FrontMatter | null;
  prevPost: FrontMatter | null;
}
