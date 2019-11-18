import React from 'react';
import styled from 'styled-components';
import { Layout, Meta } from '../components';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${p => p.theme.headerHeight});
  justify-content: center;
  margin: 0 auto;
  max-width: ${p => p.theme.container};
  padding: ${p => p.theme.contentMargin};
  width: 100%;
`;

const NotFound = () => (
  <>
    <Meta title="404" />
    <Layout isDark>
      <Container>
        <div>
          <h1>404</h1>
          <p>Whatever you&rsquo;re looking for isn&rsquo;t here.</p>
        </div>
      </Container>
    </Layout>
  </>
);

export default NotFound;
