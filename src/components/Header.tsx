import type { FC } from 'react';
import Link from 'next/link';
import { Menu } from './Menu';

export const Header: FC = () => (
  <header>
    <Link href="/">LOGO?</Link>
    <Menu />
  </header>
);
