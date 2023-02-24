import { Fragment } from 'react';
import Link from 'next/link';
import { PageLayout } from '@/layouts';
import { type DailyList } from '@/data';
import { Markdown, Pagination, PostDate } from '@/components';
import { LinkIcon } from '@/components/Icons';
import styles from '@/layouts/PageLayout.module.scss';

export const DailyPage = ({ dailies, currentPage, totalPages }: DailyList) => (
  <PageLayout
    title="Daily"
    paginationComponent={<Pagination currentPage={currentPage} totalPages={totalPages} />}
  >
    {dailies.map(daily => (
      <Fragment key={daily.day}>
        <div className={styles.title}>
          <h2 className={styles.day}>#{daily.day}</h2>
        </div>
        <article className={styles.mainContent}>
          <header>
            <PostDate date={daily.date} /> <span className="label">&middot;</span>{' '}
            <Link className="label" href={`/daily/${daily.day}`} title="Open this specific post">
              <LinkIcon />
              <span className="hidden">Open this specific post</span>
            </Link>
          </header>
          <Markdown>{daily.content}</Markdown>
        </article>
      </Fragment>
    ))}
  </PageLayout>
);
