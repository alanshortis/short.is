import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Shard from '../components/home/Shard';

const Container = styled.article`
  align-items: center;
  color: ${p => p.theme.color.typeLight};
  display: flex;
  height: calc(100vh - ${p => p.theme.headerHeight});
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const Title = styled.h1`
  align-items: center;
  display: flex;
  font-size: 2rem;
  font-weight: ${p => p.theme.font.weight};
  height: 100%;
  justify-content: center;
  padding: 1rem;
  position: absolute;
  text-align: center;
  text-shadow: 0 0 1rem ${p => p.theme.color.backgroundDark};
  width: 100%;
  @media screen and (min-width: 800px) {
    font-size: 3vw;
  }
  @media screen and (min-width: 1441px) {
    font-size: 3rem;
  }
`;

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Shard />
      <Title>
        <span>
          <b>Alan Shortis</b>&nbsp;is a developer and occasional&nbsp;designer
        </span>
      </Title>
    </Container>
  </Layout>
);

export default Home;
