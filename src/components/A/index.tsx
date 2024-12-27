'use client';

import { type FC, useEffect, useState } from 'react';
import c from 'classnames';
import styles from './A.module.scss';

const backgrounds = ['lift', 'lift', 'lift', 'lift', 'bar', 'planes', 'station', 'pier'];

export const A: FC = () => {
  const [background, setBackground] = useState(backgrounds[0]);

  useEffect(() => {
    setBackground(backgrounds[Math.floor(Math.random() * backgrounds.length)]);
  }, []);

  return (
    <div className={c(styles.A, styles[background])} aria-hidden>
      A
    </div>
  );
};
