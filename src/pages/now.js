import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
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
        <Time date="2020-02-16" pre="Updated" />
        <PostTitle>Now</PostTitle>
        <PostIntro>Work, goals and tasks currently on my plate.</PostIntro>
        <StyledPost>
          <ul>
            <li>
              Training for{' '}
              <A href="https://lepapemarmottegranfondoalpes.com/">Marmotte Granfondo Alpes</A>.
            </li>
            <li>
              Expanding the <Link to="/playlists">playlists</Link> section.
            </li>
            <li>
              Rewriting <A href="https://nivolet.cc">nivolet.cc</A>.
            </li>
            <li>
              Reading{' '}
              <A href="https://www.amazon.co.uk/Nineteen-Eighty-Four-Penguin-Modern-Classics/dp/0141393041/ref=asc_df_0141393041">
                Nineteen Eighty-Four
              </A>{' '}
              by George Orwell.
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
