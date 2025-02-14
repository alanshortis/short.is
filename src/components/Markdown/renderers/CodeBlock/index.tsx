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
        <svg width="32" height="8" viewBox="0 0 32 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4" cy="4" r="4" />
          <circle cx="16" cy="4" r="4" />
          <circle cx="28" cy="4" r="4" />
        </svg>
        <button type="button" title="Copy this code snippet" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <pre>{children}</pre>
    </div>
  );
};
