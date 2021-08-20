import dynamic from 'next/dynamic';

const SchemeToggle = dynamic(() => import('../components/SchemeToggle'), {
  ssr: process.env.NODE_ENV === 'production',
});

const Footer = () => (
  <footer>
    <SchemeToggle />
  </footer>
);

export default Footer;
