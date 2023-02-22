import Link from 'next/link';
import { PageLayout } from '@/layouts';
import { type DailyList } from '@/data';
import { LinkIcon, Markdown, Pagination, PostDate } from '@/components';
import styles from './DailyPage.module.scss';

export const DailyPage = ({ dailies, currentPage, totalPages }: DailyList) => (
  <PageLayout title="Daily">
    <h1 className="hidden">Daily</h1>
    <div>
      {dailies.map(daily => (
        <article key={daily.day} className={styles.dailyPage}>
          <div className={styles.title}>
            <h2 className={styles.day}>#{daily.day}</h2>
          </div>
          <div className={styles.mainContent}>
            <header>
              <PostDate date={daily.date} /> <span className="label">&middot;</span>{' '}
              <Link className="label" href={`/daily/${daily.day}`} title="Open this specific post">
                <LinkIcon />
                <span className="hidden">Open this specific post</span>
              </Link>
            </header>
            <Markdown>{daily.content}</Markdown>
          </div>
        </article>
      ))}
    </div>
    <Pagination currentPage={Number(currentPage)} totalPages={Number(totalPages)} />
  </PageLayout>
);
