import dynamic from 'next/dynamic';
import { DocumentHead, Header, Logo } from '@/components';
import styles from './styles.module.scss';

const SchemeToggle = dynamic(() => import('@/components/SchemeToggle'), {
  ssr: process.env.NODE_ENV === 'production',
});

interface Props {
  title?: string;
  intro?: string;
  children: React.ReactNode;
}

export const PageLayout = ({ title, intro, children }: Props) => (
  <>
    <DocumentHead title={title} intro={intro} />
    <Header />
    <main>{children}</main>
    <footer>
      <SchemeToggle />
      <Logo />
      <a href="/daily.xml" className="label">
        RSS Feed
      </a>
    </footer>
  </>
);
