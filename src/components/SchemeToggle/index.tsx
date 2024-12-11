'use client';

import { type FC, Fragment } from 'react';
import { useTheme } from '@/hooks';
import styles from './SchemeToggle.module.scss';

export const SchemeToggle: FC = () => {
  const { schemes, scheme, setScheme } = useTheme();

  return (
    <fieldset className={styles.toggle}>
      <legend>Colour scheme</legend>
      {schemes.map(thiSscheme => (
        <Fragment key={thiSscheme}>
          <input
            type="radio"
            id={`${thiSscheme}-radio`}
            name="scheme"
            checked={thiSscheme === scheme}
            onChange={() => setScheme(thiSscheme)}
          />
          <label htmlFor={`${thiSscheme}-radio`}>{thiSscheme}</label>
        </Fragment>
      ))}
    </fieldset>
  );
};
