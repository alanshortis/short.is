import { DocumentHead, Header } from '@/components';
import styles from './Page.module.scss';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Page = ({ title, children }: Props) => (
  <>
    <DocumentHead title={title} />
    <Header />
    <main id="top" className={styles.main}>
      <h1 className="hidden">{title}</h1>
      <div className={styles.grid}>{children}</div>
    </main>
  </>
);
