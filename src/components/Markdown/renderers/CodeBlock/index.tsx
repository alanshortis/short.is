'use client';

import type { JSX, FC } from 'react';
import styles from './CodeBlock.module.scss';

interface Props {
  children: JSX.Element;
}

export const CodeBlock: FC<Props> = ({ children }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(children.props.children);
  };

  return (
    <div className={styles.codeBlock}>
      <div className={styles.blockHeader}>
        <div className={styles.dumbDots}>
          <span />
          <span />
          <span />
        </div>
        <button type="button" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <pre>{children}</pre>
    </div>
  );
};
