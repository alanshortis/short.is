import Link from 'next/link';
import classnames from 'classnames';
import { Menu } from '@/components';
import styles from './styles.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <Link href="/">
      <p>Alan Shortis</p>
    </Link>
    <Menu />
  </header>
);
