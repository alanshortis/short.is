import React from 'react';
import styled from 'styled-components';
import { AlertIcon } from '.';

const Message = styled.div`
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.color.backgroundWarning};
  font-size: 0.79rem;
  margin-bottom: var(--margin);
  padding: calc(var(--margin) / 2);
  svg {
    margin-right: calc(var(--margin) / 2);
  }
`;

const OldPost = () => (
  <Message>
    <AlertIcon />
    This post is more than two years old. Dependencies, approaches, and best practices may be
    outdated.
  </Message>
);

export default OldPost;
