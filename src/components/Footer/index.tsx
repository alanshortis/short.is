import { type FC } from 'react';
import styles from './Footer.module.scss';
import { SchemeToggle, Logo } from '@/components';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <Logo />
    <SchemeToggle />
  </footer>
);
