import Link from 'next/link';
import { VisuallyHidden } from '@/components';
import styles from './styles.module.scss';

interface Props {
  currentPage: number;
  totalPages: number;
  path?: `/${string}/`;
  label?: 'Page' | 'Day';
}

export const Pagination = ({ currentPage, totalPages, path = '/daily/page/', label = 'Page' }: Props) => (
  <nav className={styles.pagination}>
    {currentPage > 1 && (
      <Link href={`${path}${currentPage - 1}`} className="label">
        &larr; Previous
      </Link>
    )}
    <p className="label">
      <VisuallyHidden>{label}</VisuallyHidden> {currentPage} of {totalPages}
    </p>
    {currentPage < totalPages && (
      <Link href={`${path}${currentPage + 1}`} className="label">
        Next &rarr;
      </Link>
    )}
  </nav>
);
