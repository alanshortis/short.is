import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import List from './components/List';

const Container = styled.div`
  width: 100%;
  max-width: 60rem;
  padding: 0 2rem;
  margin: 0 auto;
  margin-top: 5rem;
`;

const Writing = () => (
  <Layout>
    <SEO title="Writing" />
    <Container>
      <List />
    </Container>
  </Layout>
);

export default Writing;
