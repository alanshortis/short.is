'use client';

import { type FC, useState, useEffect } from 'react';
import styles from './Clock.module.scss';

export const Clock: FC = () => {
  const [time, setTime] = useState(new Date());
  const [hour12, setHour12] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <button type="button" onClick={() => setHour12(!hour12)}>
      <time className={styles.clock}>{time.toLocaleTimeString('en-GB', { hour12 })}</time>
    </button>
  );
};
