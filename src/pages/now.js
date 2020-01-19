import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Time, Meta } from '../components';
import {
  StyledPost,
  PostContainer,
  PostTitle,
  PostIntro,
} from '../components/writing/PostPage.style';

const A = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

A.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Now = () => (
  <>
    <Meta title="Now" description="What I'm working on right now." />
    <Layout>
      <PostContainer>
        <Time date="2020-01-19" pre="Updated" />
        <PostTitle>Now</PostTitle>
        <PostIntro>Work, goals and tasks currently on my plate.</PostIntro>
        <StyledPost>
          <ul>
            <li>
              Training for{' '}
              <A href="https://lepapemarmottegranfondoalpes.com/">Marmotte Granfondo Alpes</A>.
            </li>
            <li>Designing short.is v3.</li>
            <li>
              Architecture for <A href="https://nivolet.cc">nivolet.cc</A> - current thinking is
              SQLite, Node, Express, GraphQL, Next.js and Mapbox.
            </li>
            <li>
              Learning Svelte, considering <A href="https://sapper.svelte.dev/">Sapper</A> as an
              alternative to Gatsby.
            </li>
            <li>
              Reading{' '}
              <A href="https://www.amazon.co.uk/Lost-Connections-Youre-Depressed-Find/dp/1408878720">
                Lost Connections: Why You’re Depressed and How to Find Hope
              </A>{' '}
              by Johann Hari.
            </li>
            <li>
              Attempting a{' '}
              <A href="https://www.areaware.com/products/gradient-puzzle?variant=36263538436">
                frankly ridiculous Jigsaw
              </A>
              .
            </li>
          </ul>
        </StyledPost>
      </PostContainer>
    </Layout>
  </>
);

export default Now;
