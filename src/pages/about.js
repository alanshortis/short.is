import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Time, Meta, Social } from '../components';
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

const Now = () => {
  const d = new Date();
  const thisYear = d.getFullYear();
  return (
    <>
      <Meta title="About" description="Who is Alan Shortis anyway?" />
      <Layout>
        <PostContainer>
          <Time date="2020-03-01" pre="Updated" />
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
              though I made my first websites in the late 90s. They were terrible, even by the
              standards of Geocities.
            </p>
            <p>
              My preference for front end development is likely connected to me being a design
              hobbyist who used the internet to show off half baked and derivative ideas. Across my
              career I have also worked with Classic ASP, PHP, WordPress and SQL in my brief time as
              an analyst.
            </p>
            <p>
              I&rsquo;m currently working for Experian, and have previously worked in higher
              education, agencies, and retail both as an individual and as part of an agile team.
            </p>
            <h2>Now</h2>
            <ul>
              <li>
                Training for{' '}
                <A href="https://lepapemarmottegranfondoalpes.com/">Marmotte Granfondo Alpes</A>.
              </li>
              <li>Learning TypeScript.</li>
              <li>
                Rewriting <A href="https://nivolet.cc">nivolet.cc</A>.
              </li>
              <li>
                Reading{' '}
                <A href="https://www.amazon.co.uk/Nationalism-Penguin-Modern-George-Orwell/dp/0241339561/">
                  Notes on Nationalism
                </A>{' '}
                by George Orwell.
              </li>
              <li>
                Trying to catch up on{' '}
                <A href="http://revisionisthistory.com/">Revitionist History</A>.
              </li>
            </ul>
          </StyledPost>
          <Social />
        </PostContainer>
      </Layout>
    </>
  );
};

export default Now;
