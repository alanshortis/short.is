import { DocumentHead, Footer, Header } from '@/components';
import styles from './Full.module.scss';

interface Props {
  children: React.ReactNode;
}

export const Full = ({ children }: Props) => (
  <>
    <DocumentHead />
    <Header />
    <main id="top" className={styles.main}>
      {children}
    </main>
    <Footer />
  </>
);
