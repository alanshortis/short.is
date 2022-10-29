import type { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const StyledShare = styled.span`
  .sb-label {
    color: var(--accent);
    display: inline-block;
    font-size: 0.8rem;
    font-variation-settings: 'wght' 400;
    letter-spacing: 2px;
    line-height: 1.563;
    text-transform: uppercase;
  }
`;

const ShareButton: FC = () => (
  <StyledShare>
    <Head>
      <script src="/js/share-button.js" />
    </Head>
    <share-button />
  </StyledShare>
);

export default ShareButton;
