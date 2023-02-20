import Link from 'next/link';
import { PageLayout } from '@/layouts';
import { type DailyList } from '@/data';
import { Markdown, Pagination, PostDate } from '@/components';
import styles from './DailyPage.module.scss';

export const DailyPage = ({ dailies, currentPage, totalPages }: DailyList) => (
  <PageLayout title="Daily">
    <h1 className="hidden">Daily</h1>
    <div>
      {dailies.map(daily => (
        <article key={daily.day} className={styles.dailyPage}>
          <h2 className={`${styles.subTitle} label`}>
            <Link href={`/daily/${daily.day}`}>#{daily.day}</Link>
          </h2>
          <div className={styles.mainContent}>
            <PostDate date={daily.date} /> &middot;{' '}
            <h3 className={`${styles.subTitle} label`}>{daily.title}</h3>
            <Markdown>{daily.content}</Markdown>
          </div>
        </article>
      ))}
    </div>
    <Pagination currentPage={Number(currentPage)} totalPages={Number(totalPages)} />
  </PageLayout>
);
