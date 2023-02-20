import Link from 'next/link';
import styles from './Pagination.module.scss';

interface Props {
  currentPage: number;
  totalPages: number;
}

export const Pagination = ({ currentPage, totalPages }: Props) => (
  <nav className={styles.pagination}>
    {currentPage < totalPages ? (
      <span>
        <Link href={`/daily/page/${currentPage + 1}`} className="label">
          &larr;&nbsp; Older <span className="hidden"></span>
        </Link>
      </span>
    ) : (
      <span />
    )}
    <span className="label">
      <span className="hidden">Page</span> {currentPage} of {totalPages}
    </span>
    {currentPage > 1 ? (
      <span>
        <Link href={`/daily/page/${currentPage - 1}`} className="label">
          Newer <span className="hidden"></span> &nbsp;&rarr;
        </Link>
      </span>
    ) : (
      <span />
    )}
  </nav>
);
