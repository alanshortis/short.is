import Link from 'next/link';
import { MainMenu } from '../components';

const Header = () => (
  <header>
    <Link href="/">
      <a>Logo</a>
    </Link>
    <MainMenu />
  </header>
);

export default Header;
