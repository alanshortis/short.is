import Link from 'next/link';

const Header = () => (
  <header>
    <div>
      <Link href="/">
        <a>
          <span>Home page</span>
        </a>
      </Link>
    </div>
    <div>
      <Link href="/">
        <a>Logo</a>
      </Link>
    </div>
    <button>Toggle</button>
  </header>
);

export default Header;
