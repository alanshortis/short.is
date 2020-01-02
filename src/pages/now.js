import React from 'react';
import { Layout, Time, Meta } from '../components';
import {
  StyledPost,
  PostContainer,
  PostTitle,
  PostIntro,
  CodeFont,
} from '../components/writing/PostPage.style';

const Now = () => (
  <>
    <Meta title="Now" description="What I'm working on right now." />
    <Layout>
      <PostContainer>
        <CodeFont />
        <Time date="2020-01-02" pre="Updated" />
        <PostTitle>Now</PostTitle>
        <PostIntro>Work, goals and tasks currently on my plate.</PostIntro>
        <StyledPost>
          <ul>
            <li>
              Training for{' '}
              <a
                href="https://lepapemarmottegranfondoalpes.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Marmotte Granfondo Alpes
              </a>
              .
            </li>
            <li>Designing short.is v3.</li>
            <li>
              Architecture for{' '}
              <a href="https://nivolet.cc" target="_blank" rel="noopener noreferrer">
                nivolet.cc
              </a>{' '}
              - current thinking is SQLite, Node, GraphQL, Next.js and Mapbox.
            </li>
            <li>
              Learning Svelte, considering{' '}
              <a href="https://sapper.svelte.dev/" target="_blank" rel="noopener noreferrer">
                Sapper
              </a>{' '}
              as an alternative to Gatsby.
            </li>
            <li>
              Reading{' '}
              <a
                href="https://www.amazon.co.uk/Lost-Connections-Youre-Depressed-Find/dp/1408878720"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lost Connections: Why You’re Depressed and How to Find Hope
              </a>{' '}
              by Johann Hari.
            </li>
          </ul>
        </StyledPost>
      </PostContainer>
    </Layout>
  </>
);

export default Now;
