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
        <div className={styles.aside}>
          <Link className="label" href={`/daily/${daily.day}`} title="Open this specific post">
            <h2>{daily.day}</h2>
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
  </Page>
);
