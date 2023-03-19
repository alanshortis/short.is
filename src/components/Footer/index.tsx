import dynamic from 'next/dynamic';
import styles from './Footer.module.scss';

const SchemeToggle = dynamic(() => import('@/components/SchemeToggle/'), {
  ssr: process.env.NODE_ENV === 'production',
});

const thisYear = new Date().getFullYear();

const socials = [
  {
    name: 'Arena',
    url: 'https://www.are.na/alan-shortis',
  },
  {
    name: 'CodePen',
    url: 'https://codepen.io/alanshortis',
  },
];

export const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <ul className="label" role="menubar">
        {socials.map(item => (
          <li role="none" key={item.url}>
            <a href={item.url} rel="me" role="menuitem">
              {item.name}
            </a>
          </li>
        ))}
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
