import { DocumentHead, Header } from '@/components';
import styles from './HomeLayout.module.scss';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const HomeLayout = ({ children, title = '' }: Props) => (
  <>
    <DocumentHead title={title} />
    <Header />
    <main id="top" className={styles.main}>
      {children}
    </main>
  </>
);
