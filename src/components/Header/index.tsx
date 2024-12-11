import { type FC } from 'react';
import Link from 'next/link';
import { Clock, Logo } from '@/components';
import styles from './Header.module.scss';

export const Header: FC = () => (
  <header className={styles.header}>
    <span className={styles.hidden}>Alan Shortis</span>
    <Link href="/">
      <Logo />
    </Link>
    <Clock />
  </header>
);
