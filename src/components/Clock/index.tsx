'use client';

import { type FC } from 'react';
import { useClock } from '@/hooks';
import styles from './Clock.module.scss';

export const Clock: FC = () => {
  const { time, is24Hour, setIs24Hour } = useClock();

  const formattedTime = time.toLocaleTimeString('en-GB', { hour12: !is24Hour });

  return (
    <button type="button" onClick={() => setIs24Hour(!is24Hour)}>
      <time className={styles.clock}>{formattedTime}</time>
    </button>
  );
};
