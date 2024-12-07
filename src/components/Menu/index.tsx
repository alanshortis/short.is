import type { FC } from 'react';
import Link from 'next/link';

export const Menu: FC = () => (
  <nav>
    <Link href="/">Home</Link>
    <Link href="/writing">Writing</Link>
  </nav>
);
