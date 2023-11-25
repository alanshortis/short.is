import { Fragment } from 'react';
import Link from 'next/link';
import { Page } from '@/layouts';
import { type DailyList } from '@/data';
import { Markdown, Pagination, PostDate } from '@/components';
import styles from '@/layouts/Page/Page.module.scss';

export const DailyPage = ({ dailies, currentPage, totalPages }: DailyList) => (
  <Page title="Daily" paginationComponent={<Pagination currentPage={currentPage} totalPages={totalPages} />}>
    {dailies.map(daily => (
      <Fragment key={daily.day}>
        <div className={styles.title}>
          <h2>{daily.day}</h2>
        </div>
        <article className={styles.content}>
          <header>
            <Link href={`/daily/${daily.day}`} title="Open this specific post">
              <PostDate date={daily.date} />
            </Link>
          </header>
          <Markdown>{daily.content}</Markdown>
        </article>
      </Fragment>
    ))}
  </Page>
);
