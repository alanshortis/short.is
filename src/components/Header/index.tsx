import Link from 'next/link';
import { Logo, Menu } from '@/components';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <span className="hidden">Alan Shortis</span>
      <Logo />
    </Link>
    <Menu />
  </header>
);
