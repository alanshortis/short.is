import type { FC } from 'react';
import Link from 'next/link';
import type { PostList } from '../types/Posts';
import { PostDate } from '.';

export const Post: FC<PostList> = ({ posts }) => (
  <section>
    {posts.map(({ slug, date, updated, title, intro }) => (
      <article key={slug}>
        <Link href={`/writing/${slug}`}>
          <a>
            <PostDate date={date} updated={updated} />
            <h2>{title}</h2>
            <p>{intro}</p>
          </a>
        </Link>
      </article>
    ))}
  </section>
);
