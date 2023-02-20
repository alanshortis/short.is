import dynamic from 'next/dynamic';
import styles from './Footer.module.scss';

const SchemeToggle = dynamic(() => import('@/components/SchemeToggle/'), {
  ssr: process.env.NODE_ENV === 'production',
});

export const Footer = () => (
  <footer className={styles.footer}>
    <SchemeToggle />
    <p className="label">
      <a href="/daily.xml">RSS</a> &middot; &copy; {new Date().getFullYear()} Alan Shortis
    </p>
  </footer>
);
