import type { FC } from 'react';
import styled from 'styled-components';

const EmbedContainer = styled.div`
  margin-bottom: var(--spacing);
  overflow: hidden;
  iframe {
    aspect-ratio: 16 / 9;
    border-radius: ${p => p.theme.radius};
    width: 100%;
    @supports not (aspect-ratio: 16 / 9) {
      height: 250rem;
    }
  }
  a {
    display: block;
    color: currentColor;
    font-size: 0.8rem;
    line-height: 1rem;
    overflow-x: scroll;
    padding: calc(var(--spacing) / 4) 0;
    text-align: right;
  }
`;

interface Props {
  title: string;
  url: string;
}

export const ExampleEmbed: FC<Props> = ({ title, url }) => (
  <EmbedContainer>
    <iframe title={title} src={url} frameBorder="no" allowFullScreen={false} loading="lazy" />
    <a target="_blank" href={url} rel="noreferrer">
      {url.substring(8)}
    </a>
  </EmbedContainer>
);
