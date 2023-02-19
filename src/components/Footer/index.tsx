import dynamic from 'next/dynamic';
import styles from './Footer.module.scss';

const SchemeToggle = dynamic(() => import('@/components/SchemeToggle'), {
  ssr: process.env.NODE_ENV === 'production',
});

export const Footer = () => (
  <footer className={styles.footer}>
    <SchemeToggle />
    <a href="/daily.xml" className="label">
      RSS Feed
    </a>
  </footer>
);
