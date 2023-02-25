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
      &copy;2007—{thisYear} Alan Shortis &middot;{' '}
      <a href="/daily.xml" title="RSS Feed">
        RSS
        <span className="hidden">RSS Feed</span>
      </a>
    </p>
  </footer>
);
