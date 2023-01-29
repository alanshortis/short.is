import React, { createContext, useContext } from 'react';

interface Props {
  children: React.ReactNode;
}

export const meta = {
  author: 'Alan Shortis',
  title: 'Alan Shortis',
  twitter: '@alanshortis',
  description: 'Alan Shortis is a web developer',
  url: 'https://short.is',
};

const MetaContext = createContext(meta);

export const MetaProvider = ({ children }: Props) => (
  <MetaContext.Provider value={meta}>{children}</MetaContext.Provider>
);

export const useMeta = () => {
  return useContext(MetaContext);
};
