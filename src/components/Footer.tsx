import type { FC } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { MetaContext } from '../data/meta';

/** Dynamic, so we can only render a scheme toggle on the client only. Server rendering
 *  is fine and required in production as we're generating a totally static site.
 */
const SchemeToggle = dynamic(() => import('./SchemeToggle'), {
  ssr: process.env.NODE_ENV === 'production',
});

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
      <a href="#top">Back to top</a>
      <SchemeToggle />
    </StyledFooter>
  );
};
