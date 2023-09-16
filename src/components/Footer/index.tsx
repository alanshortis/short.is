import dynamic from 'next/dynamic';
import styles from './Footer.module.scss';

const SchemeToggle = dynamic(() => import('@/components/SchemeToggle/'), {
  ssr: process.env.NODE_ENV === 'production',
});

const thisYear = new Date().getFullYear();

export const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <p className="label">
        &copy;2022—{thisYear} Alan Shortis &middot;{' '}
        <a href="/daily.xml" title="RSS Feed">
          RSS
        </a>
      </p>
    </div>
    <SchemeToggle />
  </footer>
);
