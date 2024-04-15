import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import { Loader } from './Loader';
import { Header } from './Header/Header';

const GlobalBox = styled.div`
  padding: 32px 0 0 32px;
  width: 1440px;
  height: 800px;
`;

export const SharedLayout = () => {
  return (
    <GlobalBox>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </GlobalBox>
  );
};
