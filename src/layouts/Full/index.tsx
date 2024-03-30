import { DocumentHead, Header } from '@/components';
import styles from './Full.module.scss';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const Full = ({ children, title = '' }: Props) => (
  <>
    <DocumentHead title={title} />
    <Header />
    <main id="top" className={styles.main}>
      {children}
    </main>
  </>
);
