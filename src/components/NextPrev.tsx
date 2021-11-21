import type { FC } from 'react';
import Link from 'next/link';
import type { Post } from '../types';
import { VisuallyHidden } from '.';

type Props = Pick<Post, 'nextPost' | 'prevPost'>;

export const NextPrev: FC<Props> = ({ nextPost, prevPost }) => (
  <nav aria-labelledby="next-prev-title">
    <VisuallyHidden as="h2" id="next-prev-title">
      More posts
    </VisuallyHidden>
    <ul role="navigation">
      {prevPost && (
        <li role="none">
          <Link href={`/writing/${prevPost.slug}`}>
            <a>
              <p>&rarr; Older</p>
              <p>{prevPost.title}</p>
            </a>
          </Link>
        </li>
      )}

      {nextPost && (
        <li role="none">
          <Link href={`/writing/${nextPost.slug}`}>
            <a>
              <p>Newer &larr;</p>
              <p>{nextPost.title}</p>
            </a>
          </Link>
        </li>
      )}
    </ul>
  </nav>
);
