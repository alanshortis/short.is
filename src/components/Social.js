import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: var(--margin);
  margin-top: var(--margin);
  border-top: ${p => p.theme.border} solid currentColor;
  text-align: center;
`;

const SocialLink = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  display: inline-block;
  margin-bottom: 0;
  && {
    text-decoration: none;
  }
  &:not(:last-child) {
    margin-right: calc(var(--margin) / 2);
    @media ${p => p.theme.media.smallMin} {
      margin-right: var(--margin);
    }
  }
`;

const Social = () => (
  <Container>
    <SocialLink href="https://twitter.com/alanshortis" className="smallcaps">
      Twitter
    </SocialLink>
    <SocialLink href="https://www.instagram.com/ashortis/" className="smallcaps">
      Instagram
    </SocialLink>
    <SocialLink href="https://codepen.io/alanshortis" className="smallcaps">
      CodePen
    </SocialLink>
    <SocialLink href="https://www.last.fm/user/ashortis" className="smallcaps">
      last.fm
    </SocialLink>
    <SocialLink href="https://www.strava.com/athletes/138800" className="smallcaps">
      Strava
    </SocialLink>
  </Container>
);

export default Social;
