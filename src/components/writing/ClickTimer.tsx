import type { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { label } from '..';

const StyledWc = styled.div`
  border: 1px dashed var(--foreground);
  text-align: center;
  margin-bottom: var(--spacing);
  padding: var(--spacing);
  button {
    background-color: var(--foreground);
    color: var(--background);
    letter-spacing: 3px;
    padding: 1rem 0;
    text-transform: uppercase;
    width: 10rem;
    border-radius: 4px;
    margin-bottom: var(--spacing);
  }
  dl,
  p {
    ${label}
  }
  dl {
    margin-bottom: calc(var(--spacing) / 2);
    dd,
    dt {
      display: inline;
    }
  }
`;

const ClickTimer = (): FC => (
  <StyledWc>
    <Head>
      <script src="/js/click-timer.js" />
    </Head>
    <click-timer />
  </StyledWc>
);

export default ClickTimer;
