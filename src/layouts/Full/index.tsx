import { DocumentHead, Header } from '@/components';
import styles from './Full.module.scss';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Full = ({ children, title = '' }: Props) => (
  <>
    <DocumentHead title={title} />
    <Header />
    <main id="top" className={styles.main}>
      <h1 className="hidden">{title}</h1>
      {children}
    </main>
  </>
);
