import type { FC } from 'react';
import Link from 'next/link';
import type { Post } from '../types/Posts';

type Props = Pick<Post, 'nextPost' | 'prevPost'>;

export const NextPrev: FC<Props> = ({ nextPost, prevPost }) => (
  <nav>
    {prevPost && (
      <Link href={`/writing/${prevPost.slug}`}>
        <a>
          <p>&rarr; Older</p>
          <p>{prevPost.title}</p>
        </a>
      </Link>
    )}

    {nextPost && (
      <Link href={`/writing/${nextPost.slug}`}>
        <a>
          <p>Newer &larr;</p>
          <p>{nextPost.title}</p>
        </a>
      </Link>
    )}
  </nav>
);
