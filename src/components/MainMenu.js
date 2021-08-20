import Link from 'next/link';

const MainMenu = () => (
  <ul>
    <li>
      <Link href="/writing">
        <a>Writing</a>
      </Link>
    </li>
    <li>
      <Link href="/photography">
        <a>Photography</a>
      </Link>
    </li>
  </ul>
);

export default MainMenu;
