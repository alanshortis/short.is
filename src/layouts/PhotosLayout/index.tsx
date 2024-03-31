import { DocumentHead, Header } from '@/components';
import styles from './PhotosLayout.module.scss';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export const PhotosLayout = ({ children, title = '' }: Props) => (
  <>
    <DocumentHead title={title} />
    <Header />
    <main id="top" className={styles.main}>
      <div className={styles.masonry}>{children}</div>
    </main>
  </>
);
