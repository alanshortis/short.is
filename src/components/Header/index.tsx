import { Logo } from '@/components';
import styles from './Header.module.scss';

export const Header = () => (
  <header className={styles.header}>
    <div>
      <span className="hidden">Alan Shortis</span>
      <Logo />
    </div>
  </header>
);
