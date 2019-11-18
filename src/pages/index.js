import React from 'react';
import styled from 'styled-components';
import { Layout, Meta } from '../components';
import Anaglyph from '../components/sketches/Anaglyph';

const Container = styled.div`
  display: block;
  height: calc(100vh - ${p => p.theme.headerHeight});
  margin: 0 auto;
  max-width: ${p => p.theme.container};
  padding: ${p => p.theme.contentMargin};
  width: 100%;
  @media ${p => p.theme.media.mediumMin} {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }
  p {
    margin-bottom: ${p => p.theme.contentMargin};
  }
`;

const Intro = styled.div`
  width: 100%;
  flex-shrink: 1;
`;

const SocialLink = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  display: inline-block;
  margin-bottom: 0;
  &:not(:last-child) {
    margin-right: calc(${p => p.theme.contentMargin} / 2);
    @media ${p => p.theme.media.smallMin} {
      margin-right: ${p => p.theme.contentMargin};
    }
  }
`;

const Home = () => (
  <>
    <Meta title="Home" />
    <Layout isDark>
      <Container>
        <Anaglyph />
        <Intro>
          <h1>I&rsquo;m Alan Shortis—a front end developer based in Nottingham.</h1>
          <p>
            I like CSS more than JavaScript, aesthetics more than data, design systems more than
            chaos, and accessibility more than exclusion.
          </p>
          <SocialLink href="https://twitter.com/alanshortis" className="smallcaps">
            Twitter
          </SocialLink>
          <SocialLink href="https://www.instagram.com/ashortis/" className="smallcaps">
            Instagram
          </SocialLink>
          <SocialLink href="https://codepen.io/alanshortis" className="smallcaps">
            CodePen
          </SocialLink>
        </Intro>
      </Container>
    </Layout>
  </>
);

export default Home;
