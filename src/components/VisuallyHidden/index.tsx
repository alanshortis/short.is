import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

export const VisuallyHidden = ({ children }: Props) => <span className={styles.hidden}>{children}</span>;
