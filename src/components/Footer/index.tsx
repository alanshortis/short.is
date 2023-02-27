import dynamic from 'next/dynamic';
import styles from './Footer.module.scss';

const SchemeToggle = dynamic(() => import('@/components/SchemeToggle/'), {
  ssr: process.env.NODE_ENV === 'production',
});

const thisYear = new Date().getFullYear();

export const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <ul className="label">
        <li>
          <a href="https://www.are.na/alan-shortis" rel="me">
            Arena
          </a>
        </li>
        <li>
          <a href="https://codepen.io/alanshortis" rel="me">
            CodePen
          </a>
        </li>
        <li>
          <a href="https://social.lol/@shortis" rel="me">
            Mastodon
          </a>
        </li>
      </ul>
      <p className="label">
        &copy;{thisYear} Alan Shortis &middot;{' '}
        <a href="/daily.xml" title="RSS Feed">
          RSS
        </a>
      </p>
    </div>
    <SchemeToggle />
  </footer>
);
