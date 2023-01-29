import type { FC, ReactNode } from 'react';
import React, { createContext, useContext } from 'react';

export const meta = {
  author: 'Alan Shortis',
  title: 'Alan Shortis',
  twitter: '@alanshortis',
  description: 'Alan Shortis is a web developer',
  url: 'https://short.is',
};

const MetaContext = createContext(meta);

export const MetaProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <MetaContext.Provider value={meta}>{children}</MetaContext.Provider>
);

export const useMeta = () => {
  return useContext(MetaContext);
};
