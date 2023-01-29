import Link from 'next/link';

interface MenuItem {
  name: string;
  path: string;
}

const menuItems: Readonly<MenuItem[]> = [
  { name: 'Daily', path: '/daily' },
  { name: 'Now', path: '/now' },
];

export const Menu = () => (
  <nav>
    <ul>
      {menuItems.map(item => (
        <li key={item.path}>
          <Link href={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);
