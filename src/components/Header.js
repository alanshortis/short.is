import dynamic from 'next/dynamic';

const SchemeToggle = dynamic(() => import('../components/SchemeToggle'), {
  ssr: false,
});

const Header = () => (
  <header>
    <svg>
      <use href="#logo"></use>
    </svg>
    <SchemeToggle />
  </header>
);

export default Header;
