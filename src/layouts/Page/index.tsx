import { DocumentHead, Footer, Header } from '@/components';
import styles from './Page.module.scss';

interface Props {
  title?: string;
  intro?: string;
  children: React.ReactNode;
  paginationComponent?: React.ReactNode;
  hideTitle?: boolean;
}

export const Page = ({ title, intro, children, paginationComponent, hideTitle = false }: Props) => (
  <>
    <DocumentHead title={title} intro={intro} />
    <Header />
    <main id="top" className={styles.main}>
      {!hideTitle && <h1 className="hidden">{title}</h1>}
      <div className={styles.grid}>{children}</div>
      {paginationComponent}
    </main>
    <Footer />
  </>
);
