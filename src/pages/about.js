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
          <Time date="2020-05-16" pre="Updated" />
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
              But, it being {thisYear}, I also work extensively in JavaScript, using React on a
              daily basis.
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
              <li>Working from home, and living alone. Feeling optimistic though, somehow.</li>
              <li>Writing every day.</li>
              <li>Learning German. Or at least, attempting to.</li>
              <li>
                Reading{' '}
                <A href="https://www.waterstones.com/book/the-shock-doctrine/naomi-klein//9780141024530">
                  The Shock Doctrine
                </A>{' '}
                by Naomi Klein. However, since the removal of my commute and the many things I seem
                to be trying to do alongside a 9-5 job, my reading has dropped off significantly.
              </li>
              <li>Training for a summer of cycling. In 2021.</li>
            </ul>
          </StyledPost>
          <Social />
        </PostContainer>
      </Layout>
    </>
  );
};

export default Now;
