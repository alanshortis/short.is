import c from 'classnames';
import { DocumentHead, Header } from '@/components';
import styles from './Full.module.scss';

interface Props {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Full = ({ children, className, title = '' }: Props) => (
  <>
    <DocumentHead title={title} />
    <Header />
    <main id="top" className={c(styles.main, className)}>
      {children}
    </main>
  </>
);
