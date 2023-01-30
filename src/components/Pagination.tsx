import Link from 'next/link';

interface Props {
  currentPage: number;
  totalPages: number;
  path?: `/${string}/`;
  label?: 'Page' | 'Day';
}

export const Pagination = ({ currentPage, totalPages, path = '/daily/page/', label = 'Page' }: Props) => (
  <nav>
    {currentPage > 1 && <Link href={`${path}${currentPage - 1}`}>Previous</Link>}
    <p>
      {label} {currentPage} of {totalPages}
    </p>
    {currentPage < totalPages && <Link href={`${path}${currentPage + 1}`}>Next</Link>}
  </nav>
);
