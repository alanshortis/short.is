import type { FC } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { MetaContext } from '../data/meta';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export const Footer: FC = () => {
  const { year, author } = useContext(MetaContext);

  return (
    <StyledFooter>
      <span>{year}</span>
      <span>{author}</span>
    </StyledFooter>
  );
};
