import Link from 'next/link';
import { Menu, Logo } from '.';

export const Header = () => (
  <header className="container">
    <Link href="/">
      <Logo />
    </Link>
    <Menu />
  </header>
);
