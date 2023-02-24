import { DocumentHead, Footer, Header } from '@/components';
import styles from './PageLayout.module.scss';

interface Props {
  title?: string;
  intro?: string;
  children: React.ReactNode;
  paginationComponent?: React.ReactNode;
}

export const PageLayout = ({ title, intro, children, paginationComponent }: Props) => (
  <>
    <DocumentHead title={title} intro={intro} />
    <Header />
    <main id="top">
      <h1 className="hidden">{title}</h1>
      <div className={styles.grid}>{children}</div>
      {paginationComponent}
    </main>
    <Footer />
  </>
);
