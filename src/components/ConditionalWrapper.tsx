import type { FC, ReactElement } from 'react';

type Props = {
  children: ReactElement;
  condition: boolean;
  wrapper: (children: ReactElement) => ReactElement;
};

export const ConditionalWrapper: FC<Props> = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;
