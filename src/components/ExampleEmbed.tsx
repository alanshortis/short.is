import type { FC } from 'react';
import styled from 'styled-components';
import { A } from '.';

const EmbedContainer = styled.div`
  background-color: ${p => p.theme.color.overlay};
  border-radius: ${p => p.theme.radius};
  margin-bottom: var(--spacing);
  overflow: hidden;
  iframe {
    aspect-ratio: 16 / 9;
    /* border-radius: ${p => p.theme.radius}; */
    width: 100%;
    @supports not (aspect-ratio: 16 / 9) {
      height: 250rem;
    }
  }
  a {
    display: flex;
    flex-wrap: wrap;
    font-size: 0.8rem;
    justify-content: space-between;
    padding: calc(var(--spacing) / 4);
  }
`;

interface Props {
  title: string;
  url: string;
}

export const ExampleEmbed: FC<Props> = ({ title, url }) => (
  <EmbedContainer>
    <iframe title={title} src={url} frameBorder="no" allowFullScreen={false} loading="lazy" />
    <A href={url}>
      <span>{title}</span>
      <span>{url.substr(8)}</span>
    </A>
  </EmbedContainer>
);
