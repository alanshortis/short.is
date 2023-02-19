import Link from 'next/link';
import styles from './Pagination.module.scss';

interface Props {
  currentPage: number;
  totalPages: number;
  path?: `/${string}/`;
  label?: 'Page' | 'Day';
}

export const Pagination = ({ currentPage, totalPages, path = '/daily/page/', label = 'Page' }: Props) => (
  <nav className={styles.pagination}>
    {currentPage > 1 ? (
      <span>
        <Link href={`${path}${currentPage - 1}`} className="label">
          &larr; Previous <span className="hidden">{label}</span>
        </Link>
      </span>
    ) : (
      <span />
    )}
    <span className="label">
      <span className="hidden">{label}</span> {currentPage} of {totalPages}
    </span>
    {currentPage < totalPages ? (
      <span>
        <Link href={`${path}${currentPage + 1}`} className="label">
          Next <span className="hidden">{label}</span> &rarr;
        </Link>
      </span>
    ) : (
      <span />
    )}
  </nav>
);
