import dynamic from 'next/dynamic';
import styles from './Footer.module.scss';

const SchemeToggle = dynamic(() => import('@/components/SchemeToggle/'), {
  ssr: process.env.NODE_ENV === 'production',
});

const thisYear = new Date().getFullYear();

export const Footer = () => (
  <footer className={styles.footer}>
    <SchemeToggle />
    <p className="label">
      &copy; 2009—{thisYear} Alan Shortis &middot; <a href="/daily.xml">RSS</a> &middot;{' '}
      <a href="#top">Top</a> &uarr;
    </p>
  </footer>
);
