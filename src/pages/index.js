import React from 'react';
import styled from 'styled-components';
import { Layout, Meta } from '../components';
import Anaglyph from '../components/sketches/Anaglyph';

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
`;

const Home = () => (
  <>
    <Meta title="Home" />
    <Layout isDark>
      <Container>
        <Anaglyph />
      </Container>
    </Layout>
  </>
);

export default Home;
