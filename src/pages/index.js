import React from 'react';
import styled from 'styled-components';
import { Layout, Meta } from '../components';
import Orb from '../components/sketches/Orb';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${p => p.theme.headerHeight});
  justify-content: center;
  margin: 0 auto;
  max-width: calc(${p => p.theme.containerNarrow} * 1.5);
  padding: var(--margin);
  position: relative;
  width: 100%;
  p {
    margin-bottom: var(--margin);
  }
  div {
    z-index: 1;
  }
`;

const Sketch = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const SocialLink = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  display: inline-block;
  margin-bottom: 0;
  &:not(:last-child) {
    margin-right: calc(var(--margin) / 2);
    @media ${p => p.theme.media.smallMin} {
      margin-right: var(--margin);
    }
  }
`;

const Home = () => (
  <>
    <Meta title="Home" />
    <Layout isDark>
      <Container>
        <Sketch>
          <Orb />
        </Sketch>
        <div>
          <h1>I&rsquo;m Alan Shortis—a front end developer based in Nottingham.</h1>
          <p>
            I like CSS more than JavaScript, aesthetics more than data, design systems more than
            chaos, and accessibility more than exclusion.
          </p>
        </div>
        <div>
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
        </div>
      </Container>
    </Layout>
  </>
);

export default Home;
