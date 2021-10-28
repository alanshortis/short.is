import type { FC } from 'react';
import Link from 'next/link';
import type { FrontMatter } from '../data/posts';

interface Props {
  posts: FrontMatter[];
}

export const Post: FC<Props> = ({ posts }) => (
  <section>
    {posts.map(post => (
      <article key={post.slug}>
        <Link href={`/writing/${post.slug}`}>
          <a>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.intro}</p>
          </a>
        </Link>
      </article>
    ))}
  </section>
);
