import type { FC } from 'react';
import styled from 'styled-components';
import type { HeadInfo } from '../types';
import { Head, Header, Footer } from '.';

const StyledMain = styled.main`
  flex: 1;
  scroll-margin-top: calc(var(--spacing) * 4);
`;

export const Layout: FC<HeadInfo> = ({ children, title, intro }) => (
  <>
    <Head title={title} intro={intro} />
    <Header />
    <StyledMain id="main">{children}</StyledMain>
    <Footer />
  </>
);
