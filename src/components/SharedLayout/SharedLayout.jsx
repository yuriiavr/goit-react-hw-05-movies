import Navigation from 'components/Navigation';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container';
import { Suspense } from 'react';

export default function Appbar() {
  return (
    <>
      <Container>
        <header>
          <Navigation />
        </header>
        <main>
          <Suspense fallback={<div>Loading....</div>}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
}