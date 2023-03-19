import { DocumentHead, Header } from '@/components';
import styles from './Full.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Full = ({ children, className }: Props) => (
  <>
    <DocumentHead />
    <Header />
    <main id="top" className={`${styles.main} ${className}`}>
      {children}
    </main>
  </>
);
