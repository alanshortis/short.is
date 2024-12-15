import { type FC } from 'react';
import styles from './Footer.module.scss';
import { SchemeToggle } from '@/components';

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <p>Alan Shortis</p>
    <SchemeToggle />
  </footer>
);
