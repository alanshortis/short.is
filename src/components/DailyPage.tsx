import { FC } from 'react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { PageLayout } from '@/layouts';
import { type DailyList } from '@/data';

export const DailyPage: FC<DailyList> = ({ dailies, currentPage, totalPages }) => (
  <PageLayout title="Daily">
    <h1>Daily</h1>
    <div>
      {dailies.map(daily => (
        <article key={daily.day}>
          <h2>
            <Link href={`/daily/page/${daily.day}`}>{daily.day}</Link>
          </h2>
          <time dateTime={daily.date}>{daily.date}</time>
          <MDXRemote {...daily.mdxContent} />
        </article>
      ))}
    </div>
    <p>
      Page {currentPage} of {totalPages}
    </p>
  </PageLayout>
);
