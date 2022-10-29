import type { FC } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { visuallyHidden, activeMarker } from '.';

const StyledSchemeToggle = styled.div`
  .st-fields {
    font-size: 0.8rem;
    font-variation-settings: 'wght' ${p => p.theme.font.weight};
    letter-spacing: 2px;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    label {
      color: currentColor;
      cursor: pointer;
      display: inline-block;
      min-width: 3.5rem;
      padding: calc(var(--spacing) / 8) 0;
      position: relative;
      text-align: center;
    }
    input {
      ${visuallyHidden};
      &:checked + label::after {
        ${activeMarker}
      }
      &:focus-visible + label {
        outline: 2px solid var(--accent);
      }
    }
    legend {
      ${visuallyHidden}
    }
  }
`;

const SchemeToggle: FC = () => (
  <StyledSchemeToggle>
    <Head>
      <script src="/js/scheme-toggle.js" />
    </Head>
    <scheme-toggle />
  </StyledSchemeToggle>
);

export default SchemeToggle;
