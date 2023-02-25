import { Fragment } from 'react';
import Link from 'next/link';
import { PageLayout } from '@/layouts';
import { type DailyList } from '@/data';
import { Markdown, Pagination, PostDate } from '@/components';
import styles from '@/layouts/PageLayout.module.scss';

export const DailyPage = ({ dailies, currentPage, totalPages }: DailyList) => (
  <PageLayout
    title="Daily"
    paginationComponent={<Pagination currentPage={currentPage} totalPages={totalPages} />}
  >
    {dailies.map(daily => (
      <Fragment key={daily.day}>
        <div className={styles.title}>
          <Link className="label" href={`/daily/${daily.day}`} title="Open this specific post">
            <h2 className={styles.day}>{daily.day}</h2>
          </Link>
        </div>
        <article className={styles.mainContent}>
          <header>
            <PostDate date={daily.date} />
          </header>
          <Markdown>{daily.content}</Markdown>
        </article>
      </Fragment>
    ))}
  </PageLayout>
);
