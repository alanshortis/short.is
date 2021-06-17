import styled from 'styled-components';

const EmbedContainer = styled.div`
  background-color: var(--secondary-background);
  border-radius: ${p => p.theme.radius};
  margin-bottom: var(--spacing);
  padding: 0.25rem;
  padding-bottom: 0;
  iframe {
    display: flex;
    width: 100%;
    height: 28rem;
  }
  a {
    color: currentColor !important;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.833rem;
    justify-content: space-between;
    padding: calc(var(--spacing) / 4);
  }
`;

const ExampleEmbed = ({ title, url }) => (
  <EmbedContainer>
    <iframe title={title} src={url} frameBorder="no" allowFullScreen={false} loading="lazy"></iframe>
    <a href={url} target="_blank">
      <span>{title}</span>
      <span>{url}</span>
    </a>
  </EmbedContainer>
);

export default ExampleEmbed;
