import React from 'react';
import styled from 'styled-components';
import { Layout, Meta } from '../components';
import Anaglyph from '../components/sketches/Anaglyph';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${p => p.theme.headerHeight});
  justify-content: center;
  margin: 0 auto;
  padding: var(--margin);
  position: relative;
`;

const Home = () => (
  <>
    <Meta title="Home" />
    <Layout isDark>
      <Container>
        {/* <Orb /> */}
        <Anaglyph />
      </Container>
    </Layout>
  </>
);

export default Home;
