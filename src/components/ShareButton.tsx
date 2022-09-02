import type { FC } from 'react';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const ShareStyles = createGlobalStyle`
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
  <>
    <Head>
      <script src="/js/share-button.js" />
    </Head>
    <ShareStyles />
    <share-button />
  </>
);

export default ShareButton;
