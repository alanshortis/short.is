import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const Social = styled.div`
  padding-top: var(--margin);
  margin-top: calc(var(--margin) * 2);
  border-top: ${p => p.theme.border} solid currentColor;
  text-align: center;
`;

const Now = () => {
  const d = new Date();
  const thisYear = d.getFullYear();
  return (
    <>
      <Meta title="Now" description="What I'm working on right now." />
      <Layout>
        <PostContainer>
          <Time date="2020-02-16" pre="Updated" />
          <PostTitle>About</PostTitle>
          <PostIntro>
            I&rsquo;m Alan Shortis—a front end developer based in Nottingham. I like CSS more than
            JavaScript, aesthetics more than data, design systems more than chaos, and accessibility
            more than exclusion.
          </PostIntro>
          <StyledPost>
            <h2>Experience and Skills</h2>
            <p>
              As a front end developer, I specialise in developing user interfaces in HTML and CSS.
              But, it being {thisYear}, I also work extensively in JavaScript, using React/Node and
              friends on a daily basis.
            </p>
            <p>
              I have been a developer profressionally in some capacity for more than 10 years,
              though I made my first websites in the late 90s. They were terrible.
            </p>
            <p>
              My preference for front end development is likely connected to me being a design
              hobbyist who used the internet to show off half baked and derivative ideas. Across my
              career I have also worked with Classic ASP, PHP, WordPress and SQL in my brief time as
              an analyst.
            </p>
            <h2>Now</h2>
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
                and{' '}
                <A href="https://www.amazon.co.uk/Animal-Farm-Penguin-Modern-Classics/dp/0141182709">
                  Animal Farm
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
            <Social>
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
            </Social>
          </StyledPost>
        </PostContainer>
      </Layout>
    </>
  );
};

export default Now;
