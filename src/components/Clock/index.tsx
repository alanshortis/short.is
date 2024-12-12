'use client';

import { type FC } from 'react';
import { useClock } from '@/hooks';
import styles from './Clock.module.scss';

export const Clock: FC = () => {
  const { time, is12Hour, setIs12Hour } = useClock();

  return (
    <button type="button" onClick={() => setIs12Hour(!is12Hour)}>
      <time className={styles.clock}>{time.toLocaleTimeString('en-GB', { hour12: is12Hour })}</time>
    </button>
  );
};
