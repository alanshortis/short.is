import { type FC } from 'react';
import Link from 'next/link';
import { Logo, Clock } from '@/components';
import styles from './Header.module.scss';

export const Header: FC = () => (
  <header className={styles.header}>
    <Link href="/">
      <Logo />
    </Link>
    <Clock />
  </header>
);
