import Link from 'next/link';
import { PageLayout } from '@/layouts';
import { type DailyList } from '@/data';
import { Markdown, Pagination, PostDate } from '@/components';

export const DailyPage = ({ dailies, currentPage, totalPages }: DailyList) => (
  <PageLayout title="Daily">
    <h1>Daily</h1>
    <a href="/daily.xml">Feed</a>
    <div>
      {dailies.map(daily => (
        <article key={daily.day}>
          <h2>
            <Link href={`/daily/${daily.day}`}>{daily.day}</Link>
          </h2>
          <PostDate date={daily.date} />
          <Markdown>{daily.content}</Markdown>
        </article>
      ))}
    </div>
    <Pagination currentPage={Number(currentPage)} totalPages={Number(totalPages)} />
  </PageLayout>
);
