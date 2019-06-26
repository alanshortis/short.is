import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Container = styled.article`
  align-items: center;
  color: ${p => p.theme.color.typeLight};
  display: flex;
  height: calc(100vh - ${p => p.theme.headerHeight});
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const Globe = styled.div`
  border-radius: 50%;
  height: 35vw;
  width: 35vw;
  background-image: linear-gradient(
    135deg,
    ${p => p.theme.color.accent},
    transparent 0,
    transparent 17%,
    ${p => p.theme.color.accent}
  );
  box-shadow: inset 0 0 2em 0 ${p => p.theme.color.accent};
  @media screen and (min-width: 1441px) {
    height: ${rem('500px')};
    width: ${rem('500px')};
  }
`;

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Globe />
    </Container>
  </Layout>
);

export default Home;
