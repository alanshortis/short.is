import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';

interface MenuItem {
  name: string;
  path: string;
}

const menuItems: Readonly<MenuItem[]> = [
  { name: 'Daily', path: '/daily' },
  { name: 'Now', path: '/now' },
];

export const Menu = () => {
  const router = useRouter();

  return (
    <nav>
      <ul className={styles.menu}>
        {menuItems.map(item => {
          const isCurrent = router.pathname.startsWith(item.path);
          return (
            <li key={item.path}>
              <Link href={item.path} aria-current={isCurrent ? 'page' : 'false'}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
