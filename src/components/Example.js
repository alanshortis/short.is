import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ExternalIcon from './icons/ExternalIcon';

const ExampleEmbed = styled.div`
  margin-bottom: var(--margin);
  iframe {
    display: flex;
    height: 500px;
    width: 100%;
    margin: 0;
  }
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  padding: 0.5rem;
  background-color: ${p => p.theme.color.syntax.background};
  font-size: 0.79rem;
  && {
    text-decoration: none;
    border: 0;
  }
  svg {
    margin-left: calc(var(--margin) / 4);
  }
  div {
    display: flex;
    align-items: center;
  }
  span {
    display: none;
    @media ${p => p.theme.media.smallMin} {
      display: inline;
    }
  }
`;

const Example = ({ url, title }) => (
  <ExampleEmbed>
    <iframe
      title={title}
      src={url}
      frameBorder="no"
      allowTransparency="true"
      allowFullScreen="false"
      loading="lazy"
    />
    <StyledLink href={url} target="_blank" rel="noopener noreferrer">
      <div>{title}</div>
      <div>
        <span>{url}</span> <ExternalIcon width="1rem" height="1rem;" />
      </div>
    </StyledLink>
  </ExampleEmbed>
);

Example.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Example;
