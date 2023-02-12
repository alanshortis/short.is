import Link from 'next/link';
import { VisuallyHidden } from '@/components';

interface Props {
  currentPage: number;
  totalPages: number;
  path?: `/${string}/`;
  label?: 'Page' | 'Day';
}

export const Pagination = ({ currentPage, totalPages, path = '/daily/page/', label = 'Page' }: Props) => (
  <nav>
    {currentPage > 1 && (
      <Link href={`${path}${currentPage - 1}`} className="label">
        Previous
      </Link>
    )}
    <p className="label">
      <VisuallyHidden>{label}</VisuallyHidden> {currentPage} of {totalPages}
    </p>
    {currentPage < totalPages && (
      <Link href={`${path}${currentPage + 1}`} className="label">
        Next
      </Link>
    )}
  </nav>
);
