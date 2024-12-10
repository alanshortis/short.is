import { type FC } from 'react';
import styles from './Footer.module.scss';
import { ThemeToggle } from '@/components';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <p>Alan Shortis</p>
    <ThemeToggle />
  </footer>
);
